import { type FC, type PropsWithChildren } from 'react';
import { ConfirmModalWrapper } from './Styled';

export interface ConfirmModalProps {
  onConfirm: () => void;
  onDeny: () => void;
}

const ConfirmModal: FC<PropsWithChildren<ConfirmModalProps>> = ({
  onConfirm,
  onDeny,
  children,
}) => (
  <ConfirmModalWrapper>
    <h1>{children}</h1>
    <div>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onDeny}>No</button>
    </div>
  </ConfirmModalWrapper>
);
export default ConfirmModal;
