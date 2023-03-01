// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: require.resolve('@dxsixpc/configs/eslint-config'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    // 无浮动的promise，要求处理每个promise的then和catch。
    '@typescript-eslint/no-floating-promises': 'off',
  },
};
