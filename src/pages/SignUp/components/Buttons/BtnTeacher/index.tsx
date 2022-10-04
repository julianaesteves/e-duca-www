import style from './BtnTeacher.module.scss';

type Props = {
  children: String;
};
export const BtnTeacher = ({ children }: Props) => {
  return <div className={style.btn}>{children}</div>;
};
