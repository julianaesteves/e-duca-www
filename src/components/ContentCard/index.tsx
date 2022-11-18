import style from './contentCard.module.scss'

type Props = {
  title: string
  hability: string
  date: string
  img?: string;

}

export const ContentCard = ({ title, hability, date, img }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.circle}>
      <img src={img} />
      </div>

      <div className={style.content}>
        <div className={style.title}>
          <h2>{title}</h2>
          <span>Postada em {date}</span>
        </div>
        <span className={style.highlight}>{hability}</span>
      </div>
    </div>
  )
}
