import style from './deleteContent.module.scss';
import { Button } from '../../../components/Button';
type Props = {
  onClose?: () => void;
};

export const DeleteContent = ({ onClose }: Props) => {
  const handleDeleteContent = () => {
    console.log();
  };

  return (
    <div className={style.box}>
      <h1>Tem certeza que deseja deletar este conteúdo?</h1>
      <div>
        <Button className={style.btn} title="Não" onClick={onClose} />
        <Button
          className={style.btnDelete}
          title="Sim, deletar"
          onClick={handleDeleteContent}
        />
      </div>
    </div>
  );
};
