# gomoku-mcp

在浏览器里和 AI Agent 下五子棋：前端是棋盘与互动面板，后端通过 MCP 把同一局棋暴露给任意标准 MCP 客户端。

## 状态

M1 完成：`shared` 类型、规则引擎与 28 个单元测试。

## 开发

```bash
npm install --include=dev
npm test
npm run build
```

> 当前环境的 `NODE_ENV=production` 会让 npm 默认省略 devDependencies；如果安装后找不到 `vitest` / `tsc`，用 `--include=dev` 重新安装。

## 设计文档

- [docs/DESIGN.md](docs/DESIGN.md)

## 技术栈

- 后端：Node.js + TypeScript + Express + WebSocket
- 前端：Vite + React
- MCP：Streamable HTTP + stdio 双传输

## 接入方式（规划）

- Streamable HTTP：`http://127.0.0.1:3000/mcp`
- stdio 桥接：`node server/dist/mcp/stdio.js`
