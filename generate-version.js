const fs = require('fs');
const path = require('path');

// 生成版本号，格式为 vYYYYMMDD.HHMMSS
const now = new Date();
const version = `v${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}.${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;

// 将版本号写入到一个文件中
const versionFilePath = path.join(__dirname, 'version.txt');
fs.writeFileSync(versionFilePath, version);

console.log(`Generated version: ${version}`);
