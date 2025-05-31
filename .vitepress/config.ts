import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DockPilot',
  description: '简单易用的Docker管理工具 - 完整使用文档',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'DockPilot - Docker管理工具' }],
    ['meta', { name: 'og:description', content: '简单易用的Docker管理工具，支持容器管理、镜像管理、应用商店、热更新等功能' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/' },
      { text: '功能特性', link: '/features/' },
      { text: 'API文档', link: '/api/' },
      { text: '开发指南', link: '/development/' },
      { 
        text: '相关链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/your-username/dockpilot' },
          { text: 'Docker Hub', link: 'https://hub.docker.com/r/kidself/dockpilot' },
          { text: 'Telegram群组', link: 'https://t.me/+hGFa3joV-TNhNDc1' },
          { text: '问题反馈', link: 'https://github.com/your-username/dockpilot/issues' }
        ]
      }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '项目介绍', link: '/guide/' },
            { text: '快速安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '配置说明', link: '/guide/configuration' },
            { text: '升级指南', link: '/guide/upgrade' }
          ]
        }
      ],
      
      '/features/': [
        {
          text: '核心功能',
          items: [
            { text: '功能概览', link: '/features/' },
            { text: '容器管理', link: '/features/containers' },
            { text: '镜像管理', link: '/features/images' },
            { text: '应用商店', link: '/features/app-store' },
            { text: '网络管理', link: '/features/networks' },
            { text: '热更新', link: '/features/hot-update' }
          ]
        }
      ],
      
      '/api/': [
        {
          text: 'API参考',
          items: [
            { text: 'API概览', link: '/api/' },
            { text: '容器API', link: '/api/containers' },
            { text: '镜像API', link: '/api/images' },
            { text: '应用API', link: '/api/applications' },
            { text: '系统API', link: '/api/system' }
          ]
        }
      ],
      
      '/development/': [
        {
          text: '开发指南',
          items: [
            { text: '开发概述', link: '/development/' },
            { text: '开发环境', link: '/development/setup' },
            { text: '架构说明', link: '/development/architecture' },
            { text: '贡献指南', link: '/development/contributing' },
            { text: '插件开发', link: '/development/plugins' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/dockpilot' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 DockPilot Team'
    },
    
    editLink: {
      pattern: 'https://github.com/your-username/dockpilot-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
}) 