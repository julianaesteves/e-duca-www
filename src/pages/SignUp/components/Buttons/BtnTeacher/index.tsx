import { Link } from 'react-router-dom';
import style from './btnTeacher.module.scss';

export const BtnTeacher = () => {
  return (
    <Link to={'/cadastro/professor/etapa1'} className={style.btn}>
      <a>Professor</a>
    </Link>
  );
};
