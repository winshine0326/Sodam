from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from openai import OpenAI
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.llms import openai
from langchain.chains.summarize import load_summarize_chain

from dotenv import load_dotenv
load_dotenv()

app = FastAPI()

api_key = os.getenv("API_KEY")
os.environ["OPENAI_API_KEY"] = api_key

client = OpenAI()


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


@app.get('/')
def show_novel():
    return {"message"}
