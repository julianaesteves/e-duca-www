import { Video } from './Video'
import style from './videoClass.module.scss'
import imgPlay from '../../assets/img/PlayVideo.svg'
import { CardLikert } from '../CardLikert'

type Props = {
  title: string
  name: string
  category: string
  video: string
}

export const VideoClass = ({ title, name, category, video }: Props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.innerContainer}>
          <Video video={video}/>
          <div className={style.containerTitle}>
            <div className={style.title}>
              <img src={imgPlay} alt=" image Play video" />
              <h1>{title}</h1>
            </div>
            <p>
              Postado por <span>{name}</span>
            </p>
            <div className={style.category}>{category}</div>
          </div>
        </div>

        <CardLikert />
      </div>
    </>
  )
}
