# Python 이미지 선택
FROM python:3.10.11

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 파일들 복사
COPY ./requirements.txt /app/requirements.txt
COPY . /app/

# 의존성 설치
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install pymupdf

# 포트 노출
EXPOSE 8000

# FastAPI 애플리케이션 실행
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]