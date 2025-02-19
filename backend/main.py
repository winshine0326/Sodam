from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

from langchain_community.document_loaders import PyMuPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from langchain.schema.runnable import RunnableLambda
from langchain.callbacks import get_openai_callback

app = FastAPI()

api_key = os.getenv("API_KEY")
os.environ["OPENAI_API_KEY"] = api_key

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# pdf 파일 로드
loader = PyMuPDFLoader("./test.pdf")
documents = loader.load()

# 문서 분할 
text_splitter = CharacterTextSplitter.from_tiktoken_encoder(
    separator="\n\n",
    chunk_size=4000,
    chunk_overlap=500,
)

split_docs = text_splitter.split_documents(documents)

# Map 단계
map_template = """다음 문서를 200자 이내로 요약하세요:
{page_content}
요약:"""
map_prompt = PromptTemplate.from_template(map_template)

llm = ChatOpenAI(model_name="gpt-3.5-turbo-1106", temperature=0)

def extract_content(response):
    return response.content

map_chain = (map_prompt | llm | RunnableLambda(extract_content))

# Reduce 단계
reduce_template = """다음 내용을 바탕으로 소설을 1000자 이내로 만드세요:
{doc_summaries}
소설:"""
reduce_prompt = PromptTemplate.from_template(reduce_template)

reduce_chain = (reduce_prompt | llm | RunnableLambda(extract_content))

# Map-Reduce
def map_reduce(documents):
    with get_openai_callback() as cb:
        # Map 단계: 각 페이지 요약
        summaries = [map_chain.invoke({"page_content": doc.page_content[:500]}) for doc in documents]
        
        # Reduce 단계: 바로 소설 생성
        final_summary = reduce_chain.invoke({"doc_summaries": "\n\n".join(summaries)})
        
        # 토큰 사용량 출력
        print(f"🔹 총 요청 토큰: {cb.prompt_tokens}, 총 응답 토큰: {cb.completion_tokens}, 총 사용 토큰: {cb.total_tokens}")
    
    return final_summary

summary = map_reduce(documents)
print(summary)

@app.get("/")
def show_novel():
    return {"summary": summary}
