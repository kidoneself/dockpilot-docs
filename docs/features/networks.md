# 网络管理

DockPilot 提供全面的 Docker 网络管理功能，帮助您创建和管理容器网络，配置容器间通信。

## 网络类型

### Bridge 网络
- 默认网络类型
- 容器间可以通信
- 通过端口映射对外提供服务
- 适合单机环境

### Host 网络
- 容器使用主机网络栈
- 性能最优
- 无网络隔离
- 端口直接绑定主机

### None 网络
- 无网络连接
- 完全网络隔离
- 需要手动配置网络
- 适合特殊安全需求

### 自定义网络
- 用户自定义网络
- 更好的隔离性
- 支持 DNS 解析
- 灵活的网络配置

## 主要功能

### 网络列表
- 查看所有网络
- 网络类型和驱动
- 连接的容器信息
- 网络配置详情

### 网络操作
- **创建网络**：创建自定义网络
- **删除网络**：删除不需要的网络
- **连接容器**：将容器连接到网络
- **断开容器**：从网络断开容器
- **检查网络**：查看网络详细信息

### 网络配置
- IP 地址范围设置
- 子网掩码配置
- 网关地址指定
- DNS 服务器配置

## 使用示例

### 创建自定义网络
```bash
# 创建 bridge 网络
docker network create --driver bridge my-network

# 创建指定子网的网络
docker network create \
  --driver bridge \
  --subnet=172.20.0.0/16 \
  --ip-range=172.20.240.0/20 \
  --gateway=172.20.0.1 \
  my-custom-network
```

### 连接容器到网络
```bash
# 启动容器时连接网络
docker run -d --name web-server --network my-network nginx

# 将现有容器连接到网络
docker network connect my-network existing-container
```

### 容器间通信
```bash
# 容器可以通过名称互相访问
# 在 web-server 容器中访问 database 容器
curl http://database:3306
```

## 网络驱动

### Bridge 驱动
- 默认网络驱动
- 适合单机部署
- 支持端口映射
- 自动 DNS 解析

### Overlay 驱动
- 跨主机网络
- 适合集群部署
- 支持服务发现
- 加密通信

### Macvlan 驱动
- 容器拥有独立 MAC 地址
- 直接连接物理网络
- 适合网络要求严格的应用
- 需要网络设备支持

### Host 驱动
- 使用主机网络栈
- 最佳网络性能
- 无网络隔离
- 简化网络配置

## 高级功能

### 网络安全
- 网络访问控制
- 流量加密
- 防火墙规则
- 网络隔离

### 负载均衡
- 服务负载均衡
- 健康检查
- 故障转移
- 流量分发

### 服务发现
- 自动 DNS 解析
- 服务注册
- 动态配置
- 健康监控

### 网络监控
- 流量统计
- 连接状态
- 性能指标
- 异常告警

## 网络策略

### 网络分段
```yaml
# 前端网络
frontend:
  driver: bridge
  subnet: 172.18.0.0/16

# 后端网络
backend:
  driver: bridge
  subnet: 172.19.0.0/16
  internal: true  # 仅内部访问
```

### 多网络部署
```yaml
version: '3.8'
services:
  web:
    image: nginx
    networks:
      - frontend
      - backend
  
  database:
    image: mysql
    networks:
      - backend

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true
```

## 故障排除

### 网络连接问题
- 检查网络配置
- 验证路由规则
- 测试网络连通性
- 查看防火墙设置

### 性能问题
- 监控网络流量
- 检查网络延迟
- 优化网络配置
- 调整缓冲区大小

### DNS 解析问题
- 检查 DNS 配置
- 验证服务名称
- 重启 DNS 服务
- 清理 DNS 缓存

## 最佳实践

### 网络设计
- 合理规划网络拓扑
- 使用自定义网络
- 实现网络分段
- 配置安全策略

### 性能优化
- 选择合适的网络驱动
- 调整网络参数
- 监控网络性能
- 优化路由配置

### 安全建议
- 启用网络加密
- 限制网络访问
- 定期安全审计
- 更新网络组件

::: tip 提示
- 自定义网络提供更好的隔离性
- 使用服务名称而非 IP 地址通信
- 定期清理无用网络
- 监控网络资源使用情况
:::

::: warning 注意
- 删除网络前确保无容器连接
- Host 网络模式可能带来安全风险
- 网络配置变更可能影响容器通信
::: 