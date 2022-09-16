import { MenuItems } from './MenuItems';
import Logo from '../../assets/img/logo.png';
import style from "./header.module.scss"
import { useState } from 'react';
import { Link } from "react-router-dom";


export default function Header() {
  const [clicked, setClicked] = useState<boolean>(false)

  const toggleClick = () => {
    setClicked(!clicked)
  };


  return (
    <section className={style.header}>
      <Link to={"/"} >
        <img src={Logo} alt="Logotipo da e-duca" />
      </Link>
      <div className={style.icon} onClick={toggleClick} >
        <span className={clicked ? 'fas fa-bars' : 'fas fa-times'}></span>
      </div>
      <div className={clicked ? `${style.menu__closed}` : `${style.menu}`}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} >
                {item.title}
              </Link>
            </li>
          );
        })}
      </div>
    </section>
  );
}

