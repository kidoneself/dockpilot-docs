# 功能特性

DockPilot 是一个简单易用的 Docker 管理工具，基于 Web 界面，让 Docker 管理变得更简单。

## 主要功能

### 🚢 容器管理
- 启动、停止、删除容器
- 实时查看容器日志
- 一键重启服务
- 容器状态监控

### 📦 镜像管理
- 拉取、删除镜像
- 支持 Dockerfile 构建
- 镜像标签管理
- 镜像大小优化

### 🏪 应用商店
- 内置常用应用模板
- 一键部署 MySQL、Redis、Nginx 等服务
- 自定义应用模板
- 应用版本管理

### 🔄 热更新
- 支持在线更新
- 无需重新部署容器即可升级到最新版本
- 版本回滚功能
- 更新通知

### 🌐 网络管理
- 创建和管理 Docker 网络
- 配置容器间通信
- 端口映射管理
- 网络隔离

### ⚙️ 现代化界面
- 基于 Vue3 + TypeScript
- 响应式设计
- 支持深色模式
- 移动设备友好

## 技术架构

- **前端**：Vue3 + TypeScript + TDesign
- **后端**：Spring Boot + MyBatis
- **数据库**：SQLite（轻量级，无需额外配置）
- **容器化**：Docker镜像，开箱即用

## 部署方式

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

## 系统要求

- Docker 18.06+ 
- 支持的操作系统：Linux、macOS、Windows
- 内存：建议 512MB 以上
- 磁盘空间：100MB 以上

## 下一步

- [快速开始](/guide/quick-start) - 立即开始使用 DockPilot
- [安装指南](/guide/installation) - 详细安装步骤
- [开发指南](/development/) - 参与项目开发

## 🌟 核心功能

### 🚢 [容器管理](./containers.md)
完整的容器生命周期管理
- **状态管理**：启动、停止、重启、删除容器
- **实时监控**：CPU、内存、网络使用情况
- **日志查看**：实时日志流和历史日志下载
- **终端访问**：Web终端直接进入容器
- **批量操作**：同时管理多个容器

### 📦 [镜像管理](./images.md)
强大的镜像管理功能
- **镜像拉取**：从Registry下载镜像，支持进度显示
- **镜像构建**：基于Dockerfile构建自定义镜像
- **镜像删除**：清理不需要的镜像，释放存储空间
- **镜像导入导出**：支持tar格式的镜像文件
- **镜像标签管理**：创建和管理镜像标签

### 🏪 [应用商店](./app-store.md)
一键部署常用应用
- **预置模板**：数据库、Web服务器、开发工具等
- **参数配置**：简单的表单配置，无需编写YAML
- **依赖管理**：自动处理应用间的依赖关系
- **版本选择**：支持多个版本的应用部署
- **自定义模板**：创建和分享自定义应用模板

### 🌐 [网络管理](./networks.md)
Docker网络配置管理
- **网络创建**：创建bridge、overlay等类型网络
- **网络连接**：将容器连接到指定网络
- **IP管理**：分配和管理容器IP地址
- **网络拓扑**：可视化网络连接关系
- **网络监控**：网络流量和连接状态监控

### 🔄 [热更新](./hot-update.md)
无缝升级系统
- **版本检测**：自动检测最新版本
- **在线更新**：无需重新部署容器即可更新
- **前端热替换**：前端资源无刷新更新
- **后端平滑重启**：最小化服务中断时间
- **回滚支持**：支持回滚到历史版本

## 🎯 特色功能

### ⚡ 实时监控
- **资源使用**：实时显示CPU、内存、磁盘使用情况
- **状态监控**：容器运行状态实时更新
- **日志流**：实时日志查看，支持关键词高亮
- **WebSocket通信**：确保信息实时同步

### 🎨 现代化界面
- **响应式设计**：完美支持桌面和移动设备
- **深色模式**：护眼的深色主题
- **拖拽操作**：直观的拖拽排序和操作
- **快捷键支持**：提高操作效率

### 🔐 安全管理
- **权限控制**：基于角色的访问控制
- **操作审计**：记录所有重要操作
- **安全扫描**：镜像安全漏洞扫描
- **网络隔离**：容器网络安全隔离

### 📊 数据可视化
- **资源图表**：直观的资源使用图表
- **容器拓扑**：容器间关系可视化
- **统计报告**：使用情况统计和报告
- **历史趋势**：长期资源使用趋势

## 🚀 性能优势

### 轻量级设计
- **内存占用**：< 200MB 运行内存
- **启动速度**：< 30秒 快速启动
- **响应时间**：< 500ms 界面响应
- **并发支持**：支持100+ 并发用户

### 高效架构
- **前后端分离**：独立开发和部署
- **异步处理**：非阻塞式操作处理
- **缓存机制**：智能缓存提升性能
- **负载均衡**：支持多实例部署

## 📱 平台支持

### 操作系统
- ✅ **Linux**：Ubuntu、CentOS、Debian等
- ✅ **macOS**：支持Docker Desktop
- ✅ **Windows**：支持Docker Desktop和WSL2

### 浏览器支持
- ✅ **Chrome** 80+
- ✅ **Firefox** 75+
- ✅ **Safari** 13+
- ✅ **Edge** 80+

### 移动设备
- ✅ **iOS Safari** 13+
- ✅ **Android Chrome** 80+
- ✅ **移动端适配**：完整的触摸操作支持

## 🔮 路线图

### v2.0 计划功能
- **多主机管理**：管理多台Docker主机
- **集群支持**：Docker Swarm和Kubernetes集成
- **插件系统**：支持第三方插件扩展
- **API网关**：统一的API管理
- **监控告警**：完整的监控告警系统

### v2.1 计划功能
- **CI/CD集成**：与Jenkins、GitLab CI集成
- **备份恢复**：完整的数据备份恢复方案
- **多租户**：企业级多租户支持
- **SSO集成**：单点登录集成

## 📚 深入了解

想要了解具体功能的详细使用方法？点击下面的链接：

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">
  <a href="./containers" style="display: block; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; text-decoration: none; transition: all 0.2s;">
    <h3>🚢 容器管理</h3>
    <p>完整的容器生命周期管理，从创建到删除的所有操作</p>
  </a>
  
  <a href="./images" style="display: block; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; text-decoration: none; transition: all 0.2s;">
    <h3>📦 镜像管理</h3>
    <p>镜像的拉取、构建、标签管理等全方位操作</p>
  </a>
  
  <a href="./app-store" style="display: block; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; text-decoration: none; transition: all 0.2s;">
    <h3>🏪 应用商店</h3>
    <p>一键部署MySQL、Redis、Nginx等常用应用</p>
  </a>
  
  <a href="./networks" style="display: block; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; text-decoration: none; transition: all 0.2s;">
    <h3>🌐 网络管理</h3>
    <p>Docker网络的创建、配置和连接管理</p>
  </a>
  
  <a href="./hot-update" style="display: block; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; text-decoration: none; transition: all 0.2s;">
    <h3>🔄 热更新</h3>
    <p>无缝升级系统，保持服务持续可用</p>
  </a>
</div>

## 💡 使用建议

### 新手用户
1. 从 [快速开始](../guide/quick-start.md) 了解基本操作
2. 体验 [应用商店](./app-store.md) 的一键部署
3. 学习 [容器管理](./containers.md) 的基本操作

### 进阶用户
1. 掌握 [镜像管理](./images.md) 的构建技巧
2. 了解 [网络管理](./networks.md) 的高级配置
3. 使用 [热更新](./hot-update.md) 保持系统最新

### 企业用户
1. 阅读 [安全管理](../guide/security.md) 配置指南
2. 了解 [性能优化](../guide/performance.md) 最佳实践
3. 参考 [API文档](../api/) 进行集成开发

---

💡 **提示**：DockPilot的所有功能都可以通过Web界面轻松使用，无需记忆复杂的命令行参数。开始您的Docker管理之旅吧！ 