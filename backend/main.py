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

# print(documents[1].page_content[:200])

# 문서 분할 
text_splitter = CharacterTextSplitter.from_tiktoken_encoder(
    separator="\n\n",
    chunk_size=3000,
    chunk_overlap=500,
)

split_docs = text_splitter.split_documents(documents)
print(len(split_docs))

# Map 단계
map_template = """다음은 문서 중 일부 내용입니다:
{page_content}
이 문서 목록을 기반으로 주요 내용을 요약해 주세요.
답변:"""
map_prompt = PromptTemplate.from_template(map_template)

llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)

def extract_content(response):
    return response.content

map_chain = (map_prompt | llm | RunnableLambda(extract_content))

# response = map_chain.invoke({"page_content": documents[1].page_content[:200]})
# print(response)

# Reduce 단계
reduce_template = """다음은 요약의 집합입니다:
{doc_summaries}
이것들을 바탕으로 통합된 요약을 만들어 주세요.
답변:"""
reduce_prompt = PromptTemplate.from_template(reduce_template)

reduce_chain = (reduce_prompt | llm | RunnableLambda(extract_content))

# Map-Reduce
def map_reduce(documents):
    # Map 단계: 각 페이지 요약
    summaries = [map_chain.invoke({"page_content": doc.page_content[:500]}) for doc in documents]

    # Reduce 단계: 각 페이지 합쳐서 최종 요약
    final_summary = reduce_chain.invoke({"doc_summaries": "\n\n".join(summaries)})

    return final_summary

summary = map_reduce(documents)
print(summary)

@app.get("/")
def show_novel():
    return {"summary": summary}
