import React from 'react';
import style from './modal.module.scss';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose, children }: Props) => {
  const overlayRef = React.useRef(null);

  const handleOverlaClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      className={style.container}
      ref={overlayRef}
      onClick={handleOverlaClick}
    >
      {children}
    </div>
  ) : null;
};
