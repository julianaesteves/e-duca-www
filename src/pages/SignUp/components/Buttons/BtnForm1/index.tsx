import { ReactNode } from 'react';
import style from './btnForm1.module.scss';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const BtnForm1 = ({ children, onClick }: Props) => {
  return (
    <div onClick={onClick} className={style.btn}>
      {children}
    </div>
  );
};
