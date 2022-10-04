import { Link } from 'react-router-dom';
import style from './btnStudent.module.scss';

export const BtnStudent = () => {
  return (
    <Link to={'/cadastro/estudante'} className={style.btn}>
      <a>Estudante</a>
    </Link>
  );
};
