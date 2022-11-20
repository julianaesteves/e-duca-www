import { ReactNode } from 'react'
import style from './contentCard.module.scss'

type Props = {
  title: string
  hability: string
  date: string
  img?: string;
  children?: ReactNode
}

export const ContentCard = ({ title, hability, date, img, children }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.circle}>
      <img src={img} />
      </div>

      <div className={style.content}>
        <div className={style.title}>
          <h2>{title}</h2>
          <span>Postada em {date}</span>
          {children}
        </div>
        <span className={style.highlight}>{hability}</span>
      </div>
    </div>
  )
}
