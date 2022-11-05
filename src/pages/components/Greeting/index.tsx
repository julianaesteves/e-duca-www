import style from './greeting.module.scss';

type Props = {
  name: string;
  text: string;
  img: string;
};

export const Greeting = ({ name, text, img }: Props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Align}>
          <p className={style.title}>
            <span>Olá,</span>
            {name}
          </p>
          <div className={style.subtitle}>
            <p>{text}</p>
          </div>
          <div className={style.imageGreeting}>
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  );
};
