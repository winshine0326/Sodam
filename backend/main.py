from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()

app = FastAPI()

api_key = os.getenv("API_KEY")
os.environ["OPENAI_API_KEY"] = api_key

client = OpenAI()

response = client.chat.completions.create(
    model = 'gpt-4o-mini',
    messages=[
        {"role":"system","content":"너는 소설작가야. 5줄 이하로 소설을 써주면 돼"},
        {"role":"user","content":"금융을 배울 수 있도록 금융과 관련된 개념으로 교육용 소설을 써줘"}
    ]
)

print(response.choices[0].message.content)

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
    return {"message":response}
