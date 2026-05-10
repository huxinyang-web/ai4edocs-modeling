import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'
import path from 'path'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy Docs - Modeling & Simulation',
  base: '/ai4edocs-modeling/',
  srcDir: '.',
  publicDir: '.vitepress/public',
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      alias: [
        {
          find: '/assets/',
          replacement: path.resolve(__dirname, './public/assets/') + '/'
        }
      ]
    }
  },
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Modeling', icon: 'book', link: '/' },
      { text: 'Cs-Basics', link: 'https://huxinyang-web.github.io/ai4edocs-cs-basics/' },
      { text: 'Dev-Tools', link: 'https://huxinyang-web.github.io/ai4edocs-dev-tools/' },
      { text: 'Optimization', link: 'https://huxinyang-web.github.io/ai4edocs-optimization/' },
      { text: 'AI-Energy', link: 'https://huxinyang-web.github.io/ai4edocs-ai-energy/' }
    ],

    sidebar: {
      '/': [
        {
          text: '建模',
          collapsed: false,
          items: [
            { text: 'DE_intro', link: '/04Modeling/DE_intro.md' },
            { text: 'MTK_intro', link: '/04Modeling/MTK_intro.md' },
            { text: 'MTK_register', link: '/04Modeling/MTK_register.md' },
            { text: 'MTK_tips', link: '/04Modeling/MTK_tips.md' },
            { text: 'ModelingTutorial', link: '/04Modeling/ModelingTutorial.md' },
            { text: 'WathMTKdo', link: '/04Modeling/WathMTKdo.md' },
            { text: 'benchmark_de_mtk', link: '/04Modeling/benchmark_de_mtk.md' }
          ]
        },
        {
          text: '仿真',
          collapsed: true,
          items: [
            { text: '微分代数方程', link: '/05Simulation/1-微分代数方程.md' },
            { text: 'DE_heattran', link: '/05Simulation/DE_heattran.md' },
            { text: 'MTK_Sundials', link: '/05Simulation/MTK_Sundials.md' },
            { text: 'MTK_heattran', link: '/05Simulation/MTK_heattran.md' },
            { text: 'MTK_parallel_computing', link: '/05Simulation/MTK_parallel_computing.md' },
            { text: 'componementModel', link: '/05Simulation/componementModel.md' },
            { text: 'steadyRC', link: '/05Simulation/steadyRC.md' }
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
