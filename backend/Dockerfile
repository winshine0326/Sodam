FROM python:3.9

WORKDIR /workspace
RUN pip install fastapi uvicorn[standard] --no-cache-dir 
RUN pip install langchain
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]