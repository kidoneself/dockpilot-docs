# 项目介绍

DockPilot 是一个现代化的Docker管理工具，旨在简化Docker容器和镜像的管理工作。通过直观的Web界面，让Docker管理变得更加简单高效。

## 🎯 项目愿景

让Docker管理变得**简单**、**高效**、**安全**，无论是开发者、运维人员还是Docker初学者，都能快速上手并高效使用。

## ✨ 核心特色

### 🌐 现代化Web界面
- 基于Vue3+TypeScript构建，界面美观现代
- 响应式设计，支持桌面和移动设备
- 支持深色/浅色主题切换
- 实时状态更新，无需手动刷新

### 🚀 一键部署
```bash
docker run -d --privileged \
   -p 8888:8888 \
   --name dockpilot \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

### ⚡ 热更新机制
- 支持在线更新，无需重新部署容器
- 前端资源热替换，后端服务平滑重启
- 版本检测和自动更新提醒

### 🏪 内置应用商店
预置多种常用应用模板：
- **数据库**：MySQL、PostgreSQL、Redis、MongoDB
- **Web服务器**：Nginx、Apache、Caddy
- **开发工具**：Jenkins、GitLab、Portainer
- **监控工具**：Grafana、Prometheus、cAdvisor

## 🏗️ 技术架构

### 前端技术栈
- **Vue 3**：渐进式JavaScript框架
- **TypeScript**：类型安全的JavaScript
- **TDesign**：企业级设计语言
- **Vite**：下一代前端构建工具
- **Pinia**：Vue状态管理
- **Vue Router**：单页面应用路由

### 后端技术栈
- **Spring Boot 2.7**：企业级Java框架
- **MyBatis**：持久层框架
- **SQLite**：轻量级数据库
- **Docker Java**：Docker API Java客户端
- **WebSocket**：实时通信
- **Spring Security**：安全框架

### 部署架构
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Browser   │◄──►│  DockPilot   │◄──►│   Docker    │
│   (用户界面)  │    │  (管理界面)   │    │  (容器引擎)  │
└─────────────┘    └──────────────┘    └─────────────┘
                          │
                   ┌──────▼──────┐
                   │   SQLite    │
                   │   (数据存储)  │
                   └─────────────┘
```

## 🎯 适用场景

### 👨‍💻 开发者
- 本地开发环境管理
- 快速部署测试服务
- 容器调试和日志查看

### 🔧 运维人员
- 服务器容器管理
- 应用部署和监控
- 资源使用情况监控

### 🏢 小团队
- 共享开发环境
- 快速原型部署
- 服务状态监控

### 🎓 学习者
- Docker入门学习
- 可视化操作理解
- 最佳实践参考

## 📊 功能对比

| 功能特性 | DockPilot | Portainer | Docker Desktop |
|---------|-----------|-----------|----------------|
| Web界面 | ✅ 现代化 | ✅ 传统 | ❌ 桌面应用 |
| 热更新 | ✅ | ❌ | ❌ |
| 应用商店 | ✅ | ❌ | ❌ |
| 移动友好 | ✅ | ⚠️ 部分 | ❌ |
| 一键部署 | ✅ | ✅ | ❌ |
| 资源占用 | 💚 低 | 💚 低 | 🔴 高 |
| 学习成本 | 💚 低 | 💛 中 | 💚 低 |

## 🚀 快速开始

准备好体验DockPilot了吗？

1. [📦 安装部署](./installation.md) - 详细的安装步骤
2. [⚡ 快速开始](./quick-start.md) - 5分钟快速上手
3. [⚙️ 配置说明](./configuration.md) - 个性化配置
4. [🔄 升级指南](./upgrade.md) - 版本升级方法

## 📝 开源协议

DockPilot 基于 [MIT License](https://github.com/your-username/dockpilot/blob/main/LICENSE) 开源，欢迎贡献代码和反馈问题。

## 🤝 社区支持

- **GitHub Issues**：[报告问题和建议](https://github.com/your-username/dockpilot/issues)
- **Telegram群组**：[加入讨论群](https://t.me/dockpilot)
- **文档贡献**：[完善文档](https://github.com/your-username/dockpilot-docs)

---

💡 **提示**：如果您是Docker新手，建议先阅读[安装指南](./installation.md)了解基本部署步骤，然后通过[快速开始](./quick-start.md)熟悉主要功能。 