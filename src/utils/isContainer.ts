import * as containerMap from 'src/fieldConfig/container';

// 容器组件列表
const containerList = Object.keys(containerMap);

/**
 * @name 判断当前组件是否是容器组件
 */
const isContainer = (id: string) => containerList.includes(id.split('-')[0]);

export default isContainer;
