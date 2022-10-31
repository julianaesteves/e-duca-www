import { ReactNode } from 'react';
import style from './select.module.scss';
type Props = {
  name: string;
  text: string;
  value: any;
  onChange: any;
  children?: ReactNode;
};

export const Select = ({ name, text, value, onChange, children }: Props) => {
  return (
    <div className={style.form}>
      <label>{text}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};
