import style from './contentCard.module.scss';

export default function ContentCard() {
  return (
    <div className={style.container}>
      <div className={style.cylinder}></div>
      <div className={style.circle}></div>
      
      <div className={style.titleCard}>
        <span>Título do conteúdo</span>
        <p>Habilidade 1</p>
      </div>
    
    <div className={style.date}>
    <p>Postada em  01/01/2022</p>
    </div>


    </div>
  );
}
