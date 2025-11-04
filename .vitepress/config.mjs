import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Diploma Dude',
  description: 'Documentation for Diploma Dude project',
  base: '/diplomadude/', // For GitHub Pages
  themeConfig: {
    outline: {
      label: 'Quick Links'
    },
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      { text: 'Project Overview', link: '/01_ProjectOverview' },
      { text: 'System Architecture', link: '/02_SystemArchitecture' },
      { text: 'Features', link: '/03_Features' },
      { text: 'Development Phases', link: '/04_DevelopmentPhases' },
      { text: 'Technology Stack', link: '/05_TechnologyStack' },
      { text: 'Data Model', link: '/06_DataModel' },
      { text: 'API Integration', link: '/07_APIIntegration' },
      { text: 'Project Timeline', link: '/08_ProjectTimeline' },
      { text: 'Financial Plan', link: '/09_FinancialPlan' },
      { text: 'Conclusion', link: '/10_Conclusion' }
    ],
    footer: {
      message: '© 2025 Diploma Dude | Built by D. Deva Harsha',
      copyright: 'Released under the MIT License.'
    }
  }
})