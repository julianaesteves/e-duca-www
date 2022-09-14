import { MenuItems } from './MenuItems';
import Logo from '../../assets/img/logo.png';
import style from "./header.module.scss"

export default function Header() {
  // state = { clicked: false };

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // };

    return (
      <>
        <nav className={style.headerItems}>
          <img src={Logo} alt="Logotipo da e-duca" className={style.logo} />
          <div className={style.menu} >
            <i
              // className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
          {/* <ul className={this.state.clicked ? 'active' : 'menu'}> */}
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.className} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          {/* </ul> */}
        </nav>
      </>
    );
}

