import type { SpaceProps } from '@dxsixpc/components';
import type { FieldConfigType } from 'src/type';
import { spaceConfig } from './config';

const space: FieldConfigType<SpaceProps> = {
  label: '间隔',
  componentItem: {
    id: 'space',
    type: 'Space',
    props: {
      direction: 'horizontal',
      align: 'start',
    },
  },
  configPanel: spaceConfig,
};

export default space;
