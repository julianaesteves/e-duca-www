import style from './searchBar.module.scss'
import search from '../../assets/img/search.svg'
type Props = {
  onClick?: () => void
}

export const SearchBar = ({ onClick }: Props) => {
  return (
    <div className={style.container} onClick={onClick}>
      <img src={search} onClick={onClick} />

      <input name="search" id="search" type="search"></input>
    </div>
  )
}
