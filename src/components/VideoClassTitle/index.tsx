import style from './videoClassTitle.module.scss'
import imgPlay from '../../assets/img/PlayVideo.svg'
type Props = {
  title: string
  name: string
  category: string
}

export const VideoClassTitle = ({ title, name, category }: Props) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <img src={imgPlay} alt=" image Play video" />
        <h1>{title}</h1>
      </div>
      <p>
        Postado por <span>Professor {name}</span>
      </p>
      <div className={style.category}>{category}</div>
    </div>
  )
}
