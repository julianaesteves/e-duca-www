import style from './cardLikert.module.scss'
import { ImageItems } from './ImageItems'

type Props = {
  onClick?: () => void
}

export const CardLikert = ({ onClick }: Props) => {
  return (
    <div className={style.card}>
      <h1>Gostou da aula? Nos dê sua opinião!</h1>
      <div>
        {ImageItems.map((item) => {
          return (
            <div key={item.id} className={style.col}>
              <img alt="emoji" src={item.src} onClick={onClick} />
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
