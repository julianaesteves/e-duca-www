import style from './theme.module.scss';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Header } from '../Header';

type Props = {
  children: ReactNode;
  img: any;
};

export const Theme = ({ children, img }: Props) => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.containerForm}>
          <div>{children}</div>
        </div>
        <div className={style.containerOption}>
          <h1>Cadastrar-se como</h1>

          <Link to={'/cadastro/estudante'} className={style.btnStudent}>
            <a>Estudante</a>
          </Link>
          <Link to={'/cadastro/professor/etapa1'} className={style.btnTeacher}>
            <a>Professor</a>
          </Link>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};
