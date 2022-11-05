import style from './card.module.scss';

type Props = {
  className?: any;
  img: any;
  h4?: string;
  text: string;
  value?: number;
  onClick?: () => void;
};

export const Card = ({ className, img, h4, text, value, onClick }: Props) => {
  return (
    <div className={`${style.card} ${className}`} onClick={onClick}>
      <img src={img} />
      <div>
      <h4>{h4}</h4>
      <span>{value}</span>
      <p>{text}</p>
      </div>
    </div>
  );
};
