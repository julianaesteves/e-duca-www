import style from './videoClassTitle.module.scss';
import imgPlay from '../../../assets/img/PlayVideo.svg'


export function VideoClassTitle(){
  return (
    <div className={style.container}>
      <div className={style.title}>
        <img src={imgPlay} alt=" image Play video" />
        <h1>Título aula1</h1>
      </div>
      <p>
        Postado por <span>Professor Roberto</span>
      </p>
      <div className={style.category}>Categoria 2</div>
    </div>
  )
}
