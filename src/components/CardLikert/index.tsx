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
            <>
              <div className={style.col}>
                <img key={item.id} src={item.src} onClick={onClick} />
                <p>{item.text}</p>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
