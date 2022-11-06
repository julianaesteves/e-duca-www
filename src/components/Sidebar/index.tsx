import style from './sidebar.module.scss';
import Logo from '../../assets/img/logo.png';
import { Perfil } from './Perfil';
import Menu from './Menu';
import perfil from '../../assets/img/perfilTeacher.svg';

export default function Sidebar() {
  return (
    <>
      <div className={style.container}>
        <img className={style.logo} src={Logo} alt="Logotipo da e-duca" />
        <Perfil
          photo={perfil}
          name="Claudio Roberto"
          userType="Professor"
          labOne="Tempo de carreira:"
          carrerTime="10 anos"
          labtwo="Área de atuação:"
          occupation="Matemática"
        />
        <Menu />
      </div>
    </>
  );
}
