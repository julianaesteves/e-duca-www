import { ReactNode } from 'react'
import style from './cardTopic.module.scss'

type Props = {
  title?: string
  description?: string
  isAnswer?: boolean
  fullAnswer?: number
  date?: string
  children?: ReactNode
}

export const CardTopic = ({
  title,
  description,
  isAnswer,
  fullAnswer,
  date,
  children
}: Props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cylinder} />
        <div className={style.card}>
          <div className={style.info}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{`${
              isAnswer ? `${fullAnswer}respostas` : 'nenhuma resposta'
            }`}</span>
          </div>
          <div className={style.date}>
            <p>Postada em {date}</p>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
