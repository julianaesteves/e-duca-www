import { ReactNode } from 'react'
import style from './cardTopic.module.scss'

type Props = {
  title: string
  description: string
  answers: number
  date: string
  children?: ReactNode
  onClick?: () => void
  name?: string 
  lastName?: string 
}

export const CardTopic = ({
  title,
  description,
  answers,
  date,
  children,
  onClick,
  name,
  lastName
}: Props) => {
  return (
    <>
      <div className={style.container} onClick={onClick}>
        <div className={answers > 0 ? `${style.card}` : `${style.unasweredCard}`}>
          <div className={style.info}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{`${
              `${answers} respostas`
            }`}</span>
          </div>
          <div className={style.date}>
            <p>Postada em {date} por </p> 
            {name} {lastName}
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
