import { defineConfig } from 'dumi';
import { resolve } from 'path';

const name = 'generator';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/dxsixpc/${name}`,
    },
    logo: 'https://zpcscc.top/img/logo.png',
  },
  favicons: ['https://zpcscc.top/img/favicon.ico'],
  alias: {
    src: resolve(__dirname, './src'),
    '@dxsixpc/generator': resolve(__dirname, './src'),
    docs: resolve(__dirname, './docs'),
  },
  base: `/${name}/`,
  publicPath: `/${name}/`,
  extraBabelPlugins: ['@emotion/babel-plugin'],
  extraBabelPresets: [
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
  ],
});
