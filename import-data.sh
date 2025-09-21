#!/bin/bash
# 資料匯入腳本

echo "開始匯入資料..."
npx strapi import --file backup.tar.gz --only content --force --verbose
echo "匯入完成！"