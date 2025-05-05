import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
    try {
        // 创建测试目录
        const testDir = join(__dirname, 'test');
        await fs.mkdir(testDir, { recursive: true });

        // 写入测试文件
        const testFile = join(testDir, 'test.txt');
        await fs.writeFile(testFile, 'Hello MCP!');

        console.log('测试文件已创建');
    } catch (error) {
        console.error('错误:', error);
    }
}

main();