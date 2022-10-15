import { MenuItems } from './MenuItems';
import Logo from '../../assets/img/logo.png';
import style from './header.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';

export default function Header() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className={style.header}>
      <Link to={'/'}>
        <img className={style.logo} src={Logo} alt="Logotipo da e-duca" />
      </Link>
      <div className={style.icon} onClick={toggleClick}>
        <span className={clicked ? 'fas fa-bars' : 'fas fa-times'}></span>
      </div>
      <div className={clicked ? `${style.menu__closed}` : `${style.menu}`}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {index === 4 ? (
                <a onClick={() => setIsModalVisible(true)}>{item.title}</a>
              ) : (
                <Link to={item.url}>{item.title}</Link>
              )}
            </li>
          );
        })}
        {isModalVisible ? (
          <Modal
            isOpen={isModalVisible}
            onClose={() => setIsModalVisible(false)}
          ></Modal>
        ) : null}
      </div>
    </section>
  );
}
