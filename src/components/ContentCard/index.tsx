import style from './contentCard.module.scss'

type Props = {
  title: string
  hability: string
  date: string
}

export const ContentCard = ({ title, hability, date }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.circle}></div>

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
