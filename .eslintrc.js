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
    // 非button的元素点击事件必须同时有个键盘事件。这里关闭
    'jsx-a11y/click-events-have-key-events': 'off',
    // 交互式元素应是可聚焦的。这里关闭
    'jsx-a11y/interactive-supports-focus': 'off',
  },
};
