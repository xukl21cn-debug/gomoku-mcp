# gomoku-mcp

在浏览器里和 AI Agent 下五子棋：前端是棋盘与互动面板，后端通过 MCP 把同一局棋暴露给任意标准 MCP 客户端。

## 状态

设计阶段，尚未开始实现。

## 设计文档

- [docs/DESIGN.md](docs/DESIGN.md)

## 技术栈

- 后端：Node.js + TypeScript + Express + WebSocket
- 前端：Vite + React
- MCP：Streamable HTTP + stdio 双传输

## 接入方式（规划）

- Streamable HTTP：`http://127.0.0.1:3000/mcp`
- stdio 桥接：`node server/dist/mcp/stdio.js`
