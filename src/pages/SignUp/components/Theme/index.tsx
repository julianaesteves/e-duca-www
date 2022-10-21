import style from './theme.module.scss';
import { ReactNode } from 'react';
import { Header } from '../Header';
import { Button } from '../../../../components/Button';

type Props = {
  children: ReactNode;
  img: any;
  isActive?: boolean;
};

export const Theme = ({ children, img, isActive }: Props) => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.containerForm}>
          <div>{children}</div>
        </div>
        <div className={style.containerOption}>
          <h1>Cadastrar-se como</h1>

          <Button
            path="/cadastro/estudante"
            title="Estudante"
            className={`${style.btnStudent} ${
              isActive ? 'active' : 'inactive'
            }`}
          />

          <Button
            path="/cadastro/professor/etapa1"
            title="Professor"
            className={`${style.btnTeacher} ${
              isActive ? 'active' : 'inactive'
            }`}
          />

          <img src={img} />
        </div>
      </div>
    </>
  );
};
