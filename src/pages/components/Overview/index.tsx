import style from './overview.module.scss';
import iconPage from '../../../assets/img/iconPage.svg';
import iconStar from '../../../assets/img/iconStar.svg';
import iconAdd from '../../../assets/img/iconAdd.svg';
import { Card } from './components';

export default function Overview() {
  const addNewContent = () => {
    console.log();
  };

  return (
    <div className={style.container}>
      <h1>Overview</h1>
      <div className={style.cOverviem}>
        <Card img={iconPage} value={10} text="conteúdos postados" />
        <Card img={iconStar} value={233} text="avaliações" />
        <Card
          className={style.cardAdd}
          img={iconAdd}
          h4="Adicionar"
          text="um novo conteúdo"
          onClick={addNewContent}
        />
      </div>
    </div>
  );
}
