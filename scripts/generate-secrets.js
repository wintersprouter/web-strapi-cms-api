#!/usr/bin/env node

const crypto = require("crypto");

console.log("🔐 生成 Strapi 生產環境金鑰\n");

const secrets = {
  APP_KEYS: crypto.randomBytes(32).toString("base64url"),
  API_TOKEN_SALT: crypto.randomBytes(16).toString("base64url"),
  ADMIN_JWT_SECRET: crypto.randomBytes(32).toString("base64url"),
  TRANSFER_TOKEN_SALT: crypto.randomBytes(16).toString("base64url"),
  JWT_SECRET: crypto.randomBytes(32).toString("base64url"),
  ENCRYPTION_KEY: crypto.randomBytes(32).toString("base64url"),
};

console.log("📋 複製以下環境變數到 Railway：\n");

Object.entries(secrets).forEach(([key, value]) => {
  console.log(`${key}=${value}`);
});

console.log("\n💡 提示：");
console.log("- 在 Railway 專案設定中添加這些環境變數");
console.log("- 確保每個金鑰都是唯一的");
console.log("- 部署後不要更改這些金鑰，否則會導致資料無法解密");
