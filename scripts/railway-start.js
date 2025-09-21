#!/usr/bin/env node

/**
 * Railway 特化的 Strapi 啟動腳本
 * 處理環境變數驗證和優雅的啟動流程
 */

const { execSync } = require('child_process');

console.log('🚀 Railway Strapi 啟動腳本開始執行...');

// 檢查必要的環境變數
const requiredEnvVars = [
  'DATABASE_URL',
  'DATABASE_CLIENT',
  'APP_KEYS',
  'API_TOKEN_SALT',
  'ADMIN_JWT_SECRET',
  'TRANSFER_TOKEN_SALT',
  'JWT_SECRET'
];

console.log('🔍 檢查環境變數...');
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ 缺少必要的環境變數:', missingVars.join(', '));
  process.exit(1);
}

// 設定預設值
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.HOST = process.env.HOST || '0.0.0.0';
// PORT 由 Railway 自動提供，不設定預設值

console.log('✅ 環境變數檢查完成');
console.log(`📡 伺服器將在 ${process.env.HOST}:${process.env.PORT} 啟動`);
console.log(`🗄️ 資料庫客戶端: ${process.env.DATABASE_CLIENT}`);

// 資料庫連線測試
console.log('🔗 測試資料庫連線...');
try {
  // 執行簡單的資料庫連線測試
  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('❌ 資料庫連線失敗:', err.message);
    } else {
      console.log('✅ 資料庫連線成功');
    }
    pool.end();
  });
} catch (error) {
  console.warn('⚠️ 資料庫連線測試跳過:', error.message);
}

// 啟動 Strapi
console.log('🎯 啟動 Strapi 應用程式...');

try {
  // 使用 execSync 啟動 Strapi，並將輸出傳遞到主程序
  execSync('npx strapi start', {
    stdio: 'inherit',
    env: process.env
  });
} catch (error) {
  console.error('❌ Strapi 啟動失敗:', error.message);
  process.exit(1);
}