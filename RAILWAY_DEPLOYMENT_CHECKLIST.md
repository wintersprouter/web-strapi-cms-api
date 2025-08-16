# 🚀 Railway 部署檢查清單

## 📋 前置準備

### 1. 帳戶設定

- [ ] 註冊 [Railway.app](https://railway.app) 帳戶
- [ ] 註冊 [Cloudinary.com](https://cloudinary.com) 帳戶
- [ ] 確保 GitHub repository 已準備就緒

### 2. 本地環境

- [ ] Node.js 20+ 已安裝
- [ ] Git 已配置
- [ ] Railway CLI 已安裝（可選）

## 🔑 環境變數準備

### 1. 生成 Strapi 金鑰

```bash
cd cms
node scripts/generate-secrets.js
```

### 2. 準備 Cloudinary 資訊

- [ ] Cloud Name
- [ ] API Key
- [ ] API Secret
- [ ] 建立上傳預設 "blog"

### 3. 準備前端網域

- [ ] Vercel 部署網域
- [ ] 自訂網域（如有）

## 🛤️ Railway 部署步驟

### 1. 創建專案

- [ ] 登入 Railway 控制台
- [ ] 點擊 "New Project"
- [ ] 選擇 "Deploy from GitHub repo"
- [ ] 選擇您的 repository

### 2. 添加資料庫

- [ ] 點擊 "New Service"
- [ ] 選擇 "Database" → "PostgreSQL"
- [ ] 等待資料庫啟動完成

### 3. 配置環境變數

在 Strapi 服務的 Variables 標籤中添加：

#### Strapi 核心配置

- [ ] `NODE_ENV=production`
- [ ] `APP_KEYS=<生成的隨機金鑰>`
- [ ] `API_TOKEN_SALT=<生成的隨機值>`
- [ ] `ADMIN_JWT_SECRET=<生成的隨機值>`
- [ ] `TRANSFER_TOKEN_SALT=<生成的隨機值>`
- [ ] `JWT_SECRET=<生成的隨機值>`
- [ ] `ENCRYPTION_KEY=<生成的隨機值>`

#### 資料庫配置

- [ ] `DATABASE_CLIENT=postgres`
- [ ] `DATABASE_URL=<Railway 自動提供>`

#### Cloudinary 配置

- [ ] `CLOUDINARY_NAME=<您的 Cloud Name>`
- [ ] `CLOUDINARY_KEY=<您的 API Key>`
- [ ] `CLOUDINARY_SECRET=<您的 API Secret>`
- [ ] `CLOUDINARY_FOLDER=blog`

#### 前端配置

- [ ] `FRONTEND_URL=<您的 Vercel 網域>`
- [ ] `CORS_ORIGINS=<您的 Vercel 網域>`

#### 管理員配置

- [ ] `ADMIN_EMAIL=<您的郵箱>`
- [ ] `ADMIN_PASSWORD=<安全密碼>`

### 4. 部署設定

- [ ] 確認 Build Command: `npm run build`
- [ ] 確認 Start Command: `npm start`
- [ ] 設定 Health Check Path: `/api/healthcheck`

### 5. 部署

- [ ] 點擊 "Deploy" 按鈕
- [ ] 等待建置完成
- [ ] 檢查部署日誌是否有錯誤

## ✅ 部署後驗證

### 1. 基本功能檢查

- [ ] Strapi 管理介面可訪問
- [ ] 資料庫連接正常
- [ ] 媒體檔案上傳功能正常
- [ ] API 端點回應正常

### 2. 管理員帳戶

- [ ] 使用設定的郵箱和密碼登入
- [ ] 創建第一個管理員帳戶（如需要）

### 3. API 測試

- [ ] 測試 `/api/posts` 端點
- [ ] 測試 `/api/categories` 端點
- [ ] 測試 `/api/tags` 端點

### 4. 媒體上傳測試

- [ ] 上傳測試圖片
- [ ] 確認圖片儲存到 Cloudinary
- [ ] 確認圖片 URL 可正常訪問

## 🔧 故障排除

### 常見問題

- [ ] 資料庫連接失敗 → 檢查 `DATABASE_URL`
- [ ] 建置失敗 → 檢查 Node.js 版本和依賴
- [ ] 環境變數錯誤 → 檢查所有必要變數
- [ ] CORS 錯誤 → 檢查 `CORS_ORIGINS`

### 日誌檢查

- [ ] 查看 Railway 部署日誌
- [ ] 查看 Strapi 應用日誌
- [ ] 檢查資料庫連接日誌

## 📱 前端整合

### 1. 更新 Vercel 環境變數

- [ ] `NEXT_PUBLIC_STRAPI_URL=<您的 Railway 網域>`
- [ ] `STRAPI_API_TOKEN=<從 Strapi 生成的 API Token>`

### 2. 測試前端功能

- [ ] 文章列表載入正常
- [ ] 圖片顯示正常
- [ ] 分類和標籤功能正常

## 🎉 完成

恭喜！您的 Strapi CMS 已成功部署到 Railway。

### 下一步

- [ ] 設定自訂網域（可選）
- [ ] 配置 SSL 憑證
- [ ] 設定監控和警報
- [ ] 建立備份策略
- [ ] 設定 CI/CD 流程

### 重要提醒

- 保存好所有環境變數和金鑰
- 定期備份資料庫
- 監控使用量和成本
- 定期更新 Strapi 版本
