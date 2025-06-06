# 镜像管理

DockPilot 提供全面的 Docker 镜像管理功能，帮助您高效管理镜像资源。

## 主要功能

### 镜像列表
- 查看本地所有镜像
- 镜像大小和创建时间显示
- 按名称、标签、大小等筛选
- 镜像使用情况统计

### 镜像操作
- **拉取镜像**：从镜像仓库拉取镜像
- **删除镜像**：删除不需要的镜像
- **构建镜像**：使用 Dockerfile 构建镜像
- **推送镜像**：推送镜像到仓库
- **标签管理**：添加、删除镜像标签

### 镜像仓库
- 配置多个镜像仓库
- 支持私有仓库认证
- 镜像搜索功能
- 仓库连接测试

### 构建功能
- 在线 Dockerfile 编辑器
- 构建历史记录
- 构建日志查看
- 多阶段构建支持

## 使用示例

### 拉取镜像
```bash
# 从 Docker Hub 拉取 nginx 镜像
docker pull nginx:latest

# 从私有仓库拉取镜像
docker pull registry.example.com/my-app:v1.0
```

### 构建镜像
```docker
# 示例 Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 管理标签
```bash
# 为镜像添加标签
docker tag my-app:latest my-app:v1.0

# 删除标签
docker rmi my-app:v1.0
```

## 高级功能

### 镜像优化
- 镜像层分析
- 大小优化建议
- 无用镜像清理
- 镜像压缩

### 安全扫描
- 漏洞扫描
- 安全策略配置
- 扫描报告生成
- 风险等级评估

### 镜像分发
- 多仓库同步
- 镜像复制
- 分发策略配置
- 带宽优化

## 最佳实践

### 镜像构建
- 使用轻量级基础镜像
- 合理利用缓存层
- 最小化镜像层数
- 及时清理构建缓存

### 存储管理
- 定期清理无用镜像
- 使用镜像标签规范
- 监控存储空间使用
- 配置自动清理策略

::: tip 提示
- 使用多阶段构建减小镜像体积
- 定期更新基础镜像保证安全性
- 合理使用 .dockerignore 文件
- 为生产镜像使用特定标签而非 latest
::: 