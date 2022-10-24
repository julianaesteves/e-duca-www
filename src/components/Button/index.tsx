import { Link } from 'react-router-dom';
import style from './button.module.scss';

type Props = {
  onClick?: () => void;
  className: any;
  path?: any;
  title: string;
};

export const Button = ({ onClick, className, path, title }: Props) => {
  return (
    <Link to={path ?? ''}>
      <button className={`${style.btn} ${className}`} onClick={onClick}>
        {title}
      </button>
    </Link>
  );
};
