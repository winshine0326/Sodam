from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from dotenv import load_dotenv
load_dotenv()

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

@app.get('/')
def show_novel():
    return {"OK"}
