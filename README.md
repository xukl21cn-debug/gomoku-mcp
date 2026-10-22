# gomoku-mcp

在浏览器里和 AI Agent 下五子棋：前端是棋盘与互动面板，后端通过 MCP 把同一局棋暴露给任意标准 MCP 客户端。

## 状态

M1 完成：`shared` 类型、规则引擎与 28 个单元测试。

## 开发

```bash
pnpm install
pnpm test
pnpm build
```

包管理器：pnpm（版本见 `package.json` 的 `packageManager` 字段）。

## 设计文档

- [docs/DESIGN.md](docs/DESIGN.md)

## 技术栈

- 后端：Node.js + TypeScript + Express + WebSocket
- 前端：Vite + React
- MCP：Streamable HTTP + stdio 双传输

## 接入方式（规划）

- Streamable HTTP：`http://127.0.0.1:3000/mcp`
- stdio 桥接：`node server/dist/mcp/stdio.js`
