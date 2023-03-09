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
    // 强制使用一致性类型断言。<>语法，或者as语法
    '@typescript-eslint/consistent-type-assertions': 'off',

    // 禁止未知属性。这里忽略emotion里的css属性报错。将css属性视为正常属性
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
