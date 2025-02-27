# Node.js 기반 이미지 사용
FROM --platform=linux/amd64 node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 앱 코드 복사
COPY . .

# 의존성 설치
RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu --save-optional
RUN npm install @rollup/rollup-linux-x64-musl --save-optional

# React 빌드
RUN npm run build

# 빌드된 파일을 serve로 실행
EXPOSE 51
CMD ["npm", "run", "dev"]
