import { css } from '@emotion/react';
import { dragging, ItemWrapper } from './Styled';

export interface ItemProps {
  value: any;
  isDragging?: boolean;
}

const Item: React.FC<ItemProps> = (props) => {
  const { value, isDragging } = props;

  return (
    <ItemWrapper
      css={css`
        ${isDragging && dragging}
      `}
    >
      {value}
    </ItemWrapper>
  );
};

export default Item;
