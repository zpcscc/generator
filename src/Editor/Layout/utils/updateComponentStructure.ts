import { cloneDeep, isEmpty } from 'lodash';
import type { ComponentStructureType, StructureItemType } from 'src/type';
import formatItems from './formatItems';

interface updateComponentStructureProps {
  // 完整的元素数据与元素结构
  componentStructure: ComponentStructureType;
  // 需要被删除的id
  deleteItemId: string;
  // 需要被添加子元素的容器id
  addContainerId: string;
  // 需要添加的新内容
  newStructureItem: StructureItemType;
  // 新内容需要添加的位置索引
  structureIndex: number;
}

/**
 * @name 输入id，删除此项structure
 * @param id 需要在内部组件的容器ID
 * @param items 需要添加的item
 * @returns items
 */
const updateComponentStructure = (props: updateComponentStructureProps): ComponentStructureType => {
  const { componentStructure, deleteItemId, addContainerId, newStructureItem, structureIndex } =
    props;
  const { componentItems, structureItems } = componentStructure;
  // 递归循环遍历数据
  const loopItems = (items: StructureItemType[]) => {
    return items
      .map((item) => {
        // 删除对应的元素
        if (item.id === deleteItemId) return null;
        // 在容器的对应位置中，若没有此元素，则添加对应的元素
        if (
          item.id === addContainerId &&
          !item.children?.find((childrenItem) => childrenItem.id === newStructureItem.id)
        ) {
          const children = cloneDeep(item.children) || [];
          children.splice(structureIndex, 0, newStructureItem);
          return { ...item, children };
        }
        return {
          ...item,
          children:
            item.children === undefined || isEmpty(item.children) ? null : loopItems(item.children),
        };
      })
      .filter(Boolean);
  };
  const cloneStructureItems = cloneDeep(structureItems) || [];
  // 先递归处理，后判断是否为根元素。若先处理根元素，则递归时，可能会把根元素已添加的元素删除。
  const newStructureItems = loopItems(cloneStructureItems);
  // 若容器是根容器，则直接在根容器上添加对应元素
  if (addContainerId === 'root') newStructureItems.splice(structureIndex, 0, newStructureItem);
  // 返回前格式化数据，为了同步元素与结构两者的数据
  return formatItems(componentItems, newStructureItems);
};

export default updateComponentStructure;
