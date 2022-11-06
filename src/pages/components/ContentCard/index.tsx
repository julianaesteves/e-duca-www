import style from './contentCard.module.scss';

type  Props={
title:string;
ability:string;
date:string;
}

export const ContentCard=({title,ability,date}:Props)=> {
  return (
    <div className={style.container}>
      <div className={style.cylinder}></div>
      <div className={style.circle}></div>

      <div className={style.titleCard}>
        <span>{title}</span>
        <p>{ability}</p>
      </div>

      <div className={style.date}>
        <p>Postada em {date}</p>
      </div>
    </div>
  );
}
