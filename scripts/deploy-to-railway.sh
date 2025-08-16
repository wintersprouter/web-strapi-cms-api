#!/bin/bash

echo "🚀 開始部署 Strapi 到 Railway..."

# 檢查是否已安裝 Railway CLI
if ! command -v railway &> /dev/null; then
    echo "📦 安裝 Railway CLI..."
    npm install -g @railway/cli
fi

# 檢查是否已登入
if ! railway whoami &> /dev/null; then
    echo "🔐 請先登入 Railway..."
    railway login
fi

# 生成生產環境金鑰
echo "🔑 生成生產環境金鑰..."
node scripts/generate-secrets.js

echo ""
echo "📋 部署步驟："
echo "1. 確保已將程式碼推送到 GitHub"
echo "2. 在 Railway 控制台創建新專案"
echo "3. 連接您的 GitHub repository"
echo "4. 添加 PostgreSQL 資料庫服務"
echo "5. 複製上面生成的金鑰到環境變數"
echo "6. 添加其他必要的環境變數"
echo "7. 部署專案"
echo ""

# 詢問是否要繼續部署
read -p "是否要繼續部署到 Railway？(y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 開始部署..."
    railway deploy
else
    echo "❌ 部署已取消"
    exit 0
fi
