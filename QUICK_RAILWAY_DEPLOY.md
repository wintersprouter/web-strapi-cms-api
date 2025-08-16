# 🚀 Railway 快速部署指南

## ⚡ 5 分鐘快速部署

### 1. 生成金鑰

```bash
cd cms
npm run generate:secrets
```

### 2. 推送到 GitHub

```bash
git add .
git commit -m "feat: add Railway deployment configuration"
git push origin main
```

### 3. Railway 部署

1. 前往 [Railway.app](https://railway.app)
2. 點擊 "New Project"
3. 選擇 "Deploy from GitHub repo"
4. 選擇您的 repository
5. 添加 PostgreSQL 資料庫服務
6. 複製生成的金鑰到環境變數
7. 點擊 "Deploy"

### 4. 設定 Cloudinary

1. 前往 [Cloudinary.com](https://cloudinary.com)
2. 複製 Cloud Name、API Key、API Secret
3. 在 Railway 環境變數中添加：
   - `CLOUDINARY_NAME=<您的 Cloud Name>`
   - `CLOUDINARY_KEY=<您的 API Key>`
   - `CLOUDINARY_SECRET=<您的 API Secret>`

### 5. 重新部署

點擊 "Redeploy" 按鈕

## 🔑 必要環境變數

```bash
# 核心配置
NODE_ENV=production
APP_KEYS=<生成的隨機金鑰>
API_TOKEN_SALT=<生成的隨機值>
ADMIN_JWT_SECRET=<生成的隨機值>
TRANSFER_TOKEN_SALT=<生成的隨機值>
JWT_SECRET=<生成的隨機值>
ENCRYPTION_KEY=<生成的隨機值>

# 資料庫
DATABASE_CLIENT=postgres

# Cloudinary
CLOUDINARY_NAME=<您的 Cloud Name>
CLOUDINARY_KEY=<您的 API Key>
CLOUDINARY_SECRET=<您的 API Secret>
CLOUDINARY_FOLDER=blog

# 前端
FRONTEND_URL=<您的 Vercel 網域>
CORS_ORIGINS=<您的 Vercel 網域>

# 管理員
ADMIN_EMAIL=<您的郵箱>
ADMIN_PASSWORD=<安全密碼>
```

## ✅ 部署驗證

1. 訪問 Strapi 管理介面：`https://your-domain.up.railway.app/admin`
2. 使用設定的郵箱和密碼登入
3. 測試媒體上傳功能
4. 測試 API 端點：`https://your-domain.up.railway.app/api/posts`

## 🆘 快速故障排除

- **建置失敗**：檢查 Node.js 版本（需要 18+）
- **資料庫錯誤**：確認 PostgreSQL 服務已啟動
- **環境變數錯誤**：檢查所有必要變數是否已設定
- **CORS 錯誤**：確認 `CORS_ORIGINS` 設定正確

## 📱 前端整合

在 Vercel 環境變數中添加：

```bash
NEXT_PUBLIC_STRAPI_URL=https://your-domain.up.railway.app
```

## 🎉 完成

您的 Strapi CMS 現在已部署到 Railway！
