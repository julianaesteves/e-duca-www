import style from './searchBar.module.scss'
import search from '../../assets/img/search.svg'
type Props = {
  onClick?: () => void
  placeholder?: string
}

export const SearchBar = ({ onClick, placeholder }: Props) => {
  return (
    <div className={style.container}>
      <img src={search} onClick={onClick} />
      <input
        name="search"
        id="search"
        type="search"
        placeholder={placeholder}
      ></input>
    </div>
  )
}
