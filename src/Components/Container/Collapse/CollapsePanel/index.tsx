import type { CollapsePanelProps as AntCollapsePanelProps } from 'antd';
import { CollapsePanelWrapper } from './Styled';

export interface CollapsePanelProps extends AntCollapsePanelProps {
  styled?: string;
}

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/#Collapse.Panel
 */
const CollapsePanel: React.FC<CollapsePanelProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <CollapsePanelWrapper forceRender={true} {...rest}>
      {children}
    </CollapsePanelWrapper>
  );
};

export default CollapsePanel;
