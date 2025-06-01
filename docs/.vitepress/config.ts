import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'DockPilot',
  description: '简单易用的Docker管理工具文档',
  lang: 'zh-CN',
  
  // 忽略死链检查（临时解决方案）
  ignoreDeadLinks: true,
  
  // 网站图标
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'keywords', content: 'docker, container, management, web-ui, dockpilot' }]
  ],

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'DockPilot',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/quick-start' },
      { text: '安装指南', link: '/guide/installation' },
      { text: '功能特性', link: '/features/' },
      { text: 'API文档', link: '/api/' },
      { text: '支持与社区', link: '/development/' },
      { 
        text: '相关链接', 
        items: [
          { text: 'GitHub', link: 'https://github.com/kidoneself/DockPilot' },
          { text: 'Docker Hub', link: 'https://hub.docker.com/r/kidself/dockpilot' },
          { text: 'Telegram群组', link: 'https://t.me/dockpilot' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '安装指南', link: '/guide/installation' }
          ]
        }
      ],
      '/features/': [
        {
          text: '功能特性',
          items: [
            { text: '概览', link: '/features/' },
            { text: '容器管理', link: '/features/containers' },
            { text: '镜像管理', link: '/features/images' },
            { text: '应用商店', link: '/features/app-store' },
            { text: '热更新', link: '/features/hot-update' },
            { text: '网络管理', link: '/features/networks' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API文档',
          items: [
            { text: '概览', link: '/api/' }
          ]
        }
      ],
      '/development/': [
        {
          text: '支持与社区',
          items: [
            { text: '获取帮助', link: '/development/' }
          ]
        }
      ]
    },

    // 页面编辑链接
    editLink: {
      pattern: 'https://github.com/kidoneself/DockPilot/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 DockPilot Team'
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
