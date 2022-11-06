import style from './input.module.scss';

type Props = {
  text: string;
  placeholder?: string;
  type: any;
  value?: any;
  onChange?: any;
};

export const Input = ({ text, placeholder, type, value, onChange }: Props) => {
  return (
    <div className={style.form}>
      <label>{text}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
