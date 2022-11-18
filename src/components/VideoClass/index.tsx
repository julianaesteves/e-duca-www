import { Sidebar } from '../Sidebar'
import { Video } from './Video'
import style from './videoClass.module.scss'
import imgPlay from '../../assets/img/PlayVideo.svg'

type Props={
  title:string,
  name:string,
  category:string,
}

export const VideoClass = ({ title, name, category }: Props) => {
  return (
    <>
      <div className={style.container}>
        {/* <Sidebar /> */}
        <div className={style.innerContainer}>
          <Video video="https://www.youtube.com/embed/ddZHkCUcYRM"></Video>
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
      </div>
    </>
  )
}
