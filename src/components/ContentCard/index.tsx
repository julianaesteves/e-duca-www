import { ReactNode } from 'react'
import style from './contentCard.module.scss'

type Props = {
  contentId: number
  title: string
  hability: string
  date: string
  img?: string
  children?: ReactNode
  onClick?: () => void
}

export const ContentCard = ({
  title,
  hability,
  date,
  img,
  children,
  contentId,
  onClick
}: Props) => {
  return (
    <div className={style.card} key={contentId} onClick={onClick}>
      <div className={style.circle}>
        <img src={img} />
      </div>
      <div className={style.content}>
        <div className={style.text}>
          <h2>{title}</h2>
          <span className={style.highlight}>{hability}</span>
        </div>
        <div className={style.date}>
          <p>Postada em {date}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
