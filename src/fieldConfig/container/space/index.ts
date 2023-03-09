import type { FieldConfigType } from 'src/type';
import { spaceConfig } from './config';

const space: FieldConfigType = {
  label: '间隔',
  componentItem: {
    id: 'space',
    type: 'Space',
    label: '间隔',
    showLabel: true,
    props: {
      direction: 'horizontal',
    },
  },
  configPanel: spaceConfig,
};

export default space;
