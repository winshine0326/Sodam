from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from dotenv import load_dotenv
load_dotenv()

from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from langchain.chains import LLMChain

app = FastAPI()

api_key = os.getenv("API_KEY")
os.environ["OPENAI_API_KEY"] = api_key

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

loader = PyPDFLoader("./test.pdf")
document = loader.load()
document[0].page_content[:200]

text_splitter = CharacterTextSplitter.from_tiktoken_encoder(
    separator="\n\n",  # 분할기준
    chunk_size=3000,   # 사이즈
    chunk_overlap=500, # 중첩 사이즈
)

split_docs = text_splitter.split_documents(document)

map_template = """다음은 문서 중 일부 내용입니다
{pages}
이 문서 목록을 기반으로 주요 내용을 요약해 주세요.
답변:"""

map_prompt = PromptTemplate.from_template(map_template)

llm = ChatOpenAI(temperature=0, 
                 model_name='gpt-3.5-turbo-16k')
map_chain = LLMChain(llm=llm, prompt=map_prompt)

@app.get('/')
def show_novel():
    return {"OK"}
