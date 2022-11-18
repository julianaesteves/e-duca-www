import style from './student.module.scss'
// import { Sidebar } from '../../components/Sidebar'
import { ContentCard } from '../../components/ContentCard'
import { SearchBar } from '../../components/SearchBar'

export const Student = () => {
  return (
    <div className={style.container}>
      // <Sidebar />
      <div className={style.innerContainer}>
        <SearchBar placeholder="O que você deseja estudar hoje?" />
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
