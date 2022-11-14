import { VideoClassTitle } from './VideoClassTitle/inde'
import { Sidebar } from '../Sidebar'
import { Video } from './Video'
import style from './videoClass.module.scss'
export default function VideoClass() {
  return (
    <>
      <div className={style.container}>
        <Sidebar />
        <div className={style.innerContainer}>
          <Video video="https://www.youtube.com/embed/ddZHkCUcYRM"></Video>
          <VideoClassTitle />
        </div>
      </div>
    </>
  )
}
