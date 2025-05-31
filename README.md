# DockPilot Documentation

📚 DockPilot 的完整使用文档和Wiki网站

## 🌐 在线访问

- **文档网站**：[https://your-username.github.io/dockpilot-docs](https://your-username.github.io/dockpilot-docs)
- **主项目**：[https://github.com/your-username/dockpilot](https://github.com/your-username/dockpilot)

## 📋 内容概览

### 🚀 使用指南
- [项目介绍](docs/guide/index.md) - 了解DockPilot的功能特色
- [安装部署](docs/guide/installation.md) - 详细的安装步骤
- [快速开始](docs/guide/quick-start.md) - 5分钟快速上手
- [配置说明](docs/guide/configuration.md) - 个性化配置
- [升级指南](docs/guide/upgrade.md) - 版本升级方法

### ✨ 功能特性
- [功能概览](docs/features/index.md) - 所有功能总览
- [容器管理](docs/features/containers.md) - 容器操作详解
- [镜像管理](docs/features/images.md) - 镜像管理功能
- [应用商店](docs/features/app-store.md) - 一键部署应用
- [网络管理](docs/features/networks.md) - Docker网络管理
- [热更新](docs/features/hot-update.md) - 热更新机制

### 🔧 API文档
- [API概览](docs/api/index.md) - API使用说明
- [容器API](docs/api/containers.md) - 容器相关接口
- [镜像API](docs/api/images.md) - 镜像相关接口
- [应用API](docs/api/applications.md) - 应用相关接口
- [系统API](docs/api/system.md) - 系统相关接口

### 🛠️ 开发指南
- [开发概述](docs/development/index.md) - 开发环境介绍
- [环境搭建](docs/development/setup.md) - 开发环境配置
- [架构说明](docs/development/architecture.md) - 技术架构详解
- [贡献指南](docs/development/contributing.md) - 如何参与贡献
- [插件开发](docs/development/plugins.md) - 扩展功能开发

## 🛠️ 本地开发

### 环境要求
- Node.js 18+
- npm 或 yarn

### 启动开发服务
```bash
# 克隆项目
git clone https://github.com/your-username/dockpilot-docs.git
cd dockpilot-docs

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 或者
npm run docs:dev
```

访问 `http://localhost:5173` 查看文档。

### 构建部署
```bash
# 构建静态文件
npm run build

# 本地预览构建结果
npm run preview
```

## 📝 贡献文档

欢迎大家一起完善DockPilot的文档！

### 贡献方式
1. **Fork** 此仓库
2. 创建功能分支：`git checkout -b feature/improve-docs`
3. 编辑 `docs/` 目录下的Markdown文件
4. 提交更改：`git commit -m "docs: 改进安装指南"`
5. 推送分支：`git push origin feature/improve-docs`
6. 创建 **Pull Request**

### 文档规范
- 使用Markdown格式编写
- 遵循现有的文档结构和风格
- 添加适当的代码示例和截图
- 确保链接正确有效

### 目录结构
```
docs/
├── index.md                 # 首页
├── guide/                   # 使用指南
│   ├── index.md
│   ├── installation.md
│   ├── quick-start.md
│   ├── configuration.md
│   └── upgrade.md
├── features/                # 功能特性
│   ├── index.md
│   ├── containers.md
│   ├── images.md
│   ├── app-store.md
│   ├── networks.md
│   └── hot-update.md
├── api/                     # API文档
│   ├── index.md
│   ├── containers.md
│   ├── images.md
│   ├── applications.md
│   └── system.md
├── development/             # 开发指南
│   ├── index.md
│   ├── setup.md
│   ├── architecture.md
│   ├── contributing.md
│   └── plugins.md
└── public/                  # 静态资源
    ├── logo.png
    └── screenshots/
```

## 🚀 自动化部署

本项目使用 GitHub Actions 自动构建和部署：

- **触发条件**：推送到 `main` 分支
- **构建工具**：VitePress
- **部署平台**：GitHub Pages
- **访问地址**：`https://your-username.github.io/dockpilot-docs`

### GitHub Pages 设置
1. 进入仓库 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 推送代码到 main 分支自动触发部署

## 🔗 相关链接

- **主项目**：[DockPilot](https://github.com/your-username/dockpilot)
- **Docker镜像**：[kidself/dockpilot](https://hub.docker.com/r/kidself/dockpilot)
- **Telegram群组**：[https://t.me/dockpilot](https://t.me/dockpilot)
- **问题反馈**：[GitHub Issues](https://github.com/your-username/dockpilot/issues)

## 📄 许可证

本文档基于 [MIT License](LICENSE) 开源。

## 🤝 致谢

感谢所有为DockPilot文档做出贡献的开发者和用户！

---

💡 **提示**：如果您在使用DockPilot过程中发现文档不准确或有改进建议，欢迎提交Issue或PR！ 