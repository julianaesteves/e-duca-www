import { Video } from './Video'
import style from './videoClass.module.scss'
import imgPlay from '../../assets/img/PlayVideo.svg'
import { CardLikert } from '../CardLikert'

type Props = {
  title: string
  name: string
  lastName: string
  category: string
  video: string
}

export const VideoClass = ({ title, name, category, video, lastName }: Props) => {
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
              Postado por <span>Professor {name} {lastName}</span>
            </p>
            <div className={style.category}>{category}</div>
          </div>
        </div>

        <CardLikert />
      </div>
    </>
  )
}
