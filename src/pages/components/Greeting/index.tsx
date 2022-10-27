import style from './greeting.module.scss';
import greeting from '../../../assets/img/Greeting.svg';

export default function Greeting() {
  return (
    <>
      <div className={style.container}>
        <div className={style.Align}>
          <p className={style.title}>
            <span>Olá,</span> Cláudio
          </p>
          <div className={style.subtitle}>
            <p>Pronto para começar uma nova aula?</p>
          </div>
          <div className={style.imageGreeting}>
            <img src={greeting} alt="imagem greeting" />
          </div>
          </div>
          </div>
         
    </>
  );
}
