import { Greeting } from '../../components/Greeting'
import img from '../../assets/img/greetingTeacher.svg'
import {Sidebar} from '../../components/Sidebar'
import style from './teacher.module.scss'
import { ContentCard } from '../../components/ContentCard'
import Overview from './components/Overview'

export const Teacher = () => {
  return (
    <div className={style.container}>
      <Sidebar isTeacher/>
      <div className={style.innerContainer}>
        <Greeting
          name={'Carlos'}
          img={img}
          text={'Pronto para começar uma nova aula?'}
        />
        <Overview />
        <div className={style.text}>
          <h2>Meus conteúdos</h2>
          <span>Ver todos</span>
        </div>
        <div className={style.cards}>
          <ContentCard
            title="sei la"
            hability="habilidade 1"
            date="23/09/2001"
          />
          <ContentCard
            title="sei la"
            hability="habilidade 1"
            date="23/09/2001"
          />
          <ContentCard
            title="sei la"
            hability="habilidade 1"
            date="23/09/2001"
          />
          <ContentCard
            title="sei la"
            hability="habilidade 1"
            date="23/09/2001"
          />
          <ContentCard
            title="sei la"
            hability="habilidade 1"
            date="23/09/2001"
          />
          <ContentCard
            title="sei la"
            hability="habilidade 1"
            date="23/09/2001"
          />
        </div>
      </div>
    </div>
  )
}
