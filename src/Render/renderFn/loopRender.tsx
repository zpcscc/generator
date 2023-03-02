import type { ComponentItemType } from '@dxsixpc/generator/type';
import * as containerComponents from '../../Components/Container';
import componentRender from './componentRender';
import containerRender from './containerRender';
import type { LoopRenderProps } from './type';

// 循环渲染页面
const loopRender = (props: LoopRenderProps): React.ReactNode => {
  const { componentItems } = props;
  return componentItems?.map((componentItem: ComponentItemType) => {
    if (Object.keys(containerComponents).includes(componentItem?.type)) {
      return containerRender({ componentItem, ...props });
    }
    return componentRender({ componentItem, ...props });
  });
};

export default loopRender;
