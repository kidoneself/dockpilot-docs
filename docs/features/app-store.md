# 应用商店

DockPilot 内置丰富的应用商店，提供常用服务的一键部署功能，让您快速搭建开发和生产环境。

## 应用分类

### 数据库
- **MySQL** - 关系型数据库
- **PostgreSQL** - 高级关系型数据库
- **Redis** - 内存数据库和缓存
- **MongoDB** - 文档型数据库
- **InfluxDB** - 时序数据库

### Web 服务器
- **Nginx** - 高性能 Web 服务器
- **Apache** - 经典 Web 服务器
- **Traefik** - 现代反向代理
- **Caddy** - 自动 HTTPS 的 Web 服务器

### 开发工具
- **Portainer** - Docker 可视化管理
- **Jenkins** - CI/CD 持续集成
- **GitLab** - Git 代码仓库
- **SonarQube** - 代码质量检测
- **Grafana** - 数据可视化

### 监控工具
- **Prometheus** - 监控和告警
- **Grafana** - 监控面板
- **ELK Stack** - 日志分析
- **Zabbix** - 网络监控

## 主要功能

### 一键部署
- 预配置的应用模板
- 智能参数配置
- 依赖关系自动处理
- 部署状态实时跟踪

### 应用管理
- 应用版本选择
- 配置文件编辑
- 环境变量设置
- 数据卷映射

### 模板定制
- 自定义应用模板
- 导入导出模板
- 模板版本管理
- 社区模板分享

## 使用示例

### 部署 MySQL 数据库
```yaml
# MySQL 配置示例
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    container_name: mysql-server
    environment:
      MYSQL_ROOT_PASSWORD: your_password
      MYSQL_DATABASE: your_database
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    restart: unless-stopped

volumes:
  mysql_data:
```

### 部署 Nginx Web 服务器
```yaml
# Nginx 配置示例
version: '3.8'
services:
  nginx:
    image: nginx:alpine
    container_name: nginx-server
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./html:/usr/share/nginx/html
      - ./nginx.conf:/etc/nginx/nginx.conf
    restart: unless-stopped
```

## 高级功能

### 组合部署
- 多服务组合部署
- 服务依赖管理
- 网络配置优化
- 负载均衡配置

### 备份恢复
- 应用数据备份
- 配置文件备份
- 一键恢复功能
- 定时备份策略

### 健康检查
- 服务健康监控
- 自动重启策略
- 告警通知
- 性能监控

## 自定义模板

### 创建模板
1. 准备 Docker Compose 文件
2. 定义配置参数
3. 添加描述和图标
4. 保存到应用商店

### 模板结构
```json
{
  "name": "My App",
  "description": "应用描述",
  "category": "web",
  "version": "1.0.0",
  "compose": "docker-compose.yml内容",
  "env": {
    "PORT": "8080",
    "DATABASE_URL": "mysql://..."
  }
}
```

## 最佳实践

### 部署准备
- 检查系统资源
- 确认端口可用性
- 准备持久化存储
- 配置网络环境

### 安全建议
- 修改默认密码
- 限制网络访问
- 启用 HTTPS
- 定期更新镜像

::: warning 注意
- 部署前请检查端口冲突
- 重要数据请及时备份
- 生产环境建议修改默认配置
:::

::: tip 提示
- 使用数据卷持久化数据
- 合理配置资源限制
- 关注应用更新日志
- 定期检查安全漏洞
::: 