import { defineConfig } from 'dumi';

const name = 'generator';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/dxsixpc/${name}`,
    },
    logo: `/${name}/logo.png`,
    // nav: {
    //   'zh-CN': [
    //     {
    //       title: 'FormRender',
    //       link: '/form-render',
    //     },
    //     {
    //       title: 'TableRender',
    //       link: '/table-render',
    //     },
    //     {
    //       title: 'ChartRender',
    //       link: '/chart-render',
    //     },
    //     { title: '表单设计器', link: '/generator' },
    //     {
    //       title: 'Playground',
    //       link: '/playground',
    //     }
    //   ],
    // },
  },
  alias: {
    src: './src',
  },
  base: `/${name}/`,
  publicPath: `/${name}/`,
});
