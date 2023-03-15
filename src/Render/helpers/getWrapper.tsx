import { SortableContext } from '@dnd-kit/sortable';
import { Fragment } from 'react';
import SortableContainer from '../SortableContainer';

const ComponentMap = {
  editor: SortableContext,
  play: Fragment,
  component: SortableContainer,
};

/**
 * @name 通过type,返回对应的包装容器
 * @param componentConfig
 * @returns
 */
const getWrapper = (type: 'editor' | 'play' | 'component'): React.FC<any> => {
  return Reflect.get({ ...ComponentMap }, type || 'play') || Fragment;
};

export default getWrapper;
