# 使用官方 Node.js 20 LTS 映像
FROM node:20-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package files
COPY package*.json ./

# 安裝依賴
RUN npm ci --only=production

# 複製原始碼
COPY . .

# 設定環境變數
ENV NODE_ENV=production

# 建置 Strapi admin
RUN npm run build

# 暴露端口
EXPOSE 1337

# 啟動應用
CMD ["npm", "start"]