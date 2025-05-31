# API 接口

DockPilot 提供 RESTful API 接口，方便与其他系统集成或进行自动化操作。

## 接口概览

### 基础信息
- **API 地址**：`http://localhost:8888/api`
- **数据格式**：JSON
- **认证方式**：暂不需要认证（后续版本会加入）

### 主要功能接口

#### 🚢 容器管理
- `GET /api/containers` - 获取容器列表
- `POST /api/containers/{id}/start` - 启动容器
- `POST /api/containers/{id}/stop` - 停止容器
- `POST /api/containers/{id}/restart` - 重启容器
- `DELETE /api/containers/{id}` - 删除容器

#### 📦 镜像管理
- `GET /api/images` - 获取镜像列表
- `POST /api/images/pull` - 拉取镜像
- `DELETE /api/images/{id}` - 删除镜像
- `POST /api/images/build` - 构建镜像

#### 🌐 网络管理
- `GET /api/networks` - 获取网络列表
- `POST /api/networks` - 创建网络
- `DELETE /api/networks/{id}` - 删除网络

#### 🔄 系统信息
- `GET /api/system/info` - 获取系统信息
- `GET /api/system/version` - 获取版本信息
- `GET /api/update/check` - 检查更新

## 使用示例

### 获取容器列表
```bash
curl -X GET http://localhost:8888/api/containers
```

### 启动容器
```bash
curl -X POST http://localhost:8888/api/containers/my-container/start
```

### 拉取镜像
```bash
curl -X POST http://localhost:8888/api/images/pull \
  -H "Content-Type: application/json" \
  -d '{"image": "nginx:latest"}'
```

## 在线文档

DockPilot 运行后，您可以访问以下地址查看完整的 API 文档：

- **Swagger UI**：`http://localhost:8888/swagger-ui.html`
- **API 文档**：`http://localhost:8888/api-docs`

## 常见用途

### 脚本自动化
```bash
#!/bin/bash
# 自动重启所有容器的脚本
containers=$(curl -s http://localhost:8888/api/containers | jq -r '.[].name')
for container in $containers; do
  curl -X POST http://localhost:8888/api/containers/$container/restart
done
```

### 监控集成
```bash
# 获取系统资源使用情况
curl http://localhost:8888/api/system/stats
```

## 注意事项

::: warning 安全提醒
- API 目前无认证机制，请勿在公网暴露
- 建议仅在内网或可信环境中使用
- 后续版本将加入完整的认证和权限控制
:::

::: tip 提示
- 所有操作都会在 Web 界面实时更新
- API 返回的数据格式与界面显示一致
- 建议先在 Web 界面熟悉操作，再使用 API
::: 