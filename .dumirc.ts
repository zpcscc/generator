import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'generator',
  },
  alias: {
    src: './src',
  },
});
