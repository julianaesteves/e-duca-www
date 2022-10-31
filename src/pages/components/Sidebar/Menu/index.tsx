import style from './menu.module.scss';
import { MenuItems } from './MenuItems';

export default function Menu() {
  return (
    <>
      <div className={style.navigation}>
        <h4>Perfil</h4>
        <li>Configurações</li>
        <h4>Conteúdos</h4>
        {MenuItems.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </div>
    </>
  );
}
