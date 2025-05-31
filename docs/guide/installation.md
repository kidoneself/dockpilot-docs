# 安装部署

DockPilot 提供多种部署方式，推荐使用Docker方式进行部署，简单快捷且稳定可靠。

## 📋 系统要求

### 最低配置
- **CPU**：1核
- **内存**：512MB
- **磁盘**：1GB可用空间
- **Docker**：20.10+

### 推荐配置
- **CPU**：2核+
- **内存**：2GB+
- **磁盘**：10GB+可用空间
- **Docker**：24.0+

### 操作系统支持
- ✅ **Linux**：Ubuntu 18.04+、CentOS 7+、Debian 9+
- ✅ **macOS**：10.14+（需要Docker Desktop）
- ✅ **Windows**：Windows 10+（需要Docker Desktop或WSL2）

## 🚀 快速部署（推荐）

### 标准版本
最简单的部署方式，适用于大多数场景：

```bash
docker run -d --privileged \
   --name dockpilot \
   -p 8888:8888 \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

### 热更新版本
支持在线更新的版本，推荐用于生产环境：

```bash
docker run -d --privileged \
   --name dockpilot-hot \
   -p 8888:8888 \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot-hot:latest
```

## ⚙️ 高级配置

### 自定义端口
如果8888端口被占用，可以修改为其他端口：

```bash
docker run -d --privileged \
   --name dockpilot \
   -p 9999:8888 \  # 使用9999端口
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

### 自定义数据目录
指定数据存储目录：

```bash
docker run -d --privileged \
   --name dockpilot \
   -p 8888:8888 \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /your/custom/path:/dockpilot \  # 自定义数据目录
   --restart unless-stopped \
   kidself/dockpilot:latest
```

### 环境变量配置

```bash
docker run -d --privileged \
   --name dockpilot \
   -p 8888:8888 \
   -e JAVA_OPTS="-Xmx1g -Xms512m" \  # JVM参数
   -e TZ=Asia/Shanghai \              # 时区设置
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

## 🌐 网络配置

### 使用自定义网络
```bash
# 创建网络
docker network create dockpilot-network

# 在自定义网络中运行
docker run -d --privileged \
   --name dockpilot \
   --network dockpilot-network \
   -p 8888:8888 \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

### 反向代理配置

#### Nginx配置示例
```nginx
server {
    listen 80;
    server_name dockpilot.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:8888;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket支持
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

#### Caddy配置示例
```txt
dockpilot.yourdomain.com {
    reverse_proxy localhost:8888
}
```

## 🐳 Docker Compose部署

创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'

services:
  dockpilot:
    image: kidself/dockpilot-hot:latest
    container_name: dockpilot
    privileged: true
    restart: unless-stopped
    ports:
      - "8888:8888"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /:/mnt/host
      - ./dockpilot-data:/dockpilot
    environment:
      - TZ=Asia/Shanghai
      - JAVA_OPTS=-Xmx1g -Xms512m
    networks:
      - dockpilot

networks:
  dockpilot:
    driver: bridge
```

部署命令：
```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

## 📁 目录结构说明

部署完成后，数据目录结构如下：

```
/home/dockpilot/
├── data.db           # SQLite数据库文件
├── logs/             # 应用日志目录
├── uploads/          # 上传文件目录
├── apps/             # 应用模板目录
├── backup/           # 备份文件目录
└── config/           # 配置文件目录
    ├── application.yml
    └── application-prod.yml
```

## 🔐 安全配置

### 配置访问认证
默认情况下，DockPilot 不需要登录即可访问。如需启用认证：

```bash
docker run -d --privileged \
   --name dockpilot \
   -p 8888:8888 \
   -e ENABLE_AUTH=true \           # 启用认证
   -e DEFAULT_USERNAME=admin \     # 默认用户名
   -e DEFAULT_PASSWORD=your-password \  # 默认密码
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

### HTTPS配置
使用反向代理配置HTTPS，推荐使用Let's Encrypt免费证书。

## 🔧 故障排除

### 常见问题

#### 1. 端口被占用
```bash
# 检查端口占用
netstat -tulpn | grep 8888

# 或使用lsof
lsof -i :8888
```

#### 2. Docker Socket权限问题
```bash
# 确保Docker Socket权限正确
sudo chmod 666 /var/run/docker.sock

# 或将用户添加到docker组
sudo usermod -aG docker $USER
```

#### 3. 容器无法启动
```bash
# 查看详细错误日志
docker logs dockpilot

# 查看容器状态
docker ps -a
```

#### 4. 网络连接问题
```bash
# 检查防火墙设置
sudo ufw status

# 临时关闭防火墙测试
sudo ufw disable
```

### 日志查看
```bash
# 查看实时日志
docker logs -f dockpilot

# 查看最近100行日志
docker logs --tail 100 dockpilot

# 查看指定时间段日志
docker logs --since="2024-01-01T00:00:00" dockpilot
```

## 📈 性能优化

### JVM参数优化
```bash
docker run -d --privileged \
   --name dockpilot \
   -p 8888:8888 \
   -e JAVA_OPTS="-Xmx2g -Xms1g -XX:+UseG1GC -XX:MaxGCPauseMillis=200" \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

### 资源限制
```bash
docker run -d --privileged \
   --name dockpilot \
   -p 8888:8888 \
   --memory=2g \      # 限制内存使用
   --cpus=2 \         # 限制CPU使用
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v /:/mnt/host \
   -v /home/dockpilot:/dockpilot \
   --restart unless-stopped \
   kidself/dockpilot:latest
```

## ✅ 验证安装

部署完成后，通过以下步骤验证安装：

1. **访问Web界面**：打开浏览器访问 `http://localhost:8888`
2. **检查容器状态**：应该能看到容器列表，包括DockPilot本身
3. **测试基本功能**：尝试查看镜像列表、容器日志等
4. **检查热更新**：点击右上角的更新按钮，检查版本信息

## 🔄 下一步

安装完成后，建议阅读：

- [⚡ 快速开始](./quick-start) - 了解基本使用方法
- [✨ 功能特性](../features/) - 详细功能介绍
- [💬 支持与社区](../development/) - 获取帮助和反馈

## 💬 获取帮助

如果在安装过程中遇到问题：

- 🐛 [提交Issue](https://github.com/kidoneself/DockPilot/issues)
- 💬 [加入Telegram群](https://t.me/dockpilot) 