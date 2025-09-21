# 使用官方 Node.js 20 LTS 映像
FROM node:20-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package files
COPY package*.json ./

# 安裝所有依賴（包含 dev dependencies 用於建置）
RUN npm ci

# 複製原始碼
COPY . .

# 設定環境變數
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

# 建置 Strapi admin
RUN npm run build

# 移除 dev dependencies 節省空間
RUN npm prune --production

# 暴露端口
EXPOSE 1337

# 啟動應用（直接啟動，不重複建置）
CMD ["npm", "start"]