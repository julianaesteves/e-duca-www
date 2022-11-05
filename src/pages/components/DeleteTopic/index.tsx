import style from './deleteTopic.module.scss';
import { Button } from '../../../components/Button';
type Props = {
  onClose?: () => void;
};

export const DeleteTopic = ({ onClose }: Props) => {
  const handleDeleteTopic = () => {
    console.log();
  };

  return (
    <div className={style.box}>
      <h1>Tem certeza que deseja deletar esse tópico?</h1>
      <p>Todas as respostas também serão deletadas.</p>
      <div>
        <Button className={style.btn} title="Não" onClick={onClose} />
        <Button
          className={style.btnDelete}
          title="Sim, deletar"
          onClick={handleDeleteTopic}
        />
      </div>
    </div>
  );
};
