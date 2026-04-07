import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy Docs - Modeling & Simulation',
  base: '/ai4edocs-modeling/',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Modeling', icon: 'book', link: '/docs/' },
      { text: 'Cs-Basics', link: 'https://huxinyang-web.github.io/ai4edocs-cs-basics/' },
      { text: 'Dev-Tools', link: 'https://huxinyang-web.github.io/ai4edocs-dev-tools/' },
      { text: 'Optimization', link: 'https://huxinyang-web.github.io/ai4edocs-optimization/' },
      { text: 'AI-Energy', link: 'https://huxinyang-web.github.io/ai4edocs-ai-energy/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: '建模',
          collapsed: false,
          items: [
            { text: '简介', link: '/docs/04Modeling/简介.md' },
            { text: 'ModelingTutorial', link: '/docs/04Modeling/ModelingTutorial.md' },
            { text: 'DE_intro', link: '/docs/04Modeling/DE_intro.md' },
            { text: 'WhatMTKdo', link: '/docs/04Modeling/WhatMTKdo.md' },
            { text: 'StructuralChemicalReaction', link: '/docs/04Modeling/StructuralChemicalReaction.md' },
            { text: 'MTK 入门', link: '/docs/04Modeling/MTK 入门.md' },
            { text: 'MTK 学习', link: '/docs/04Modeling/MTK 学习.md' }
          ]
        },
        {
          text: '仿真',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/05Simulation/简介.md' },
            { text: '微分方程基础', link: '/docs/05Simulation/微分方程基础.md' },
            { text: '数值仿真方法', link: '/docs/05Simulation/数值仿真方法.md' },
            { text: '仿真案例分析', link: '/docs/05Simulation/仿真案例分析.md' },
            { text: '性能优化技巧', link: '/docs/05Simulation/性能优化技巧.md' },
            { text: '常见问题解答', link: '/docs/05Simulation/常见问题解答.md' },
            { text: '仿真实战', link: '/docs/05Simulation/仿真实战.md' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/huxinyang-web/ai4edocs-modeling/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  },

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
})
