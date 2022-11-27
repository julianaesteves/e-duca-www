import style from './deleteTopic.module.scss';
import { Button } from '../../../../components/Button';
import PostService from '../../../../services/post.service'
type Props = {
  onClose?: () => void;
  selectedTopic?: any
};

export const DeleteTopic = ({ onClose, selectedTopic }: Props) => {
  console.log(selectedTopic)
  
  const deleteTopic = () => {
    PostService.deleteTopic(selectedTopic.idTopico).then(
      (response: any) => {
        console.log(response.data)
      },
      (error: any) => {
        console.log('DELETE/STUDENT/deleteTopic: Erro', error.response)
        if (error.response && error.response.status === 403) {
          console.log('DELETE/STUDENT/deleteTopic: Erro de autenticação')
        }
      }
    )
  }

  return (
    <div className={style.box}>
      <h1>Tem certeza que deseja deletar esse tópico?</h1>
      <p>Todas as respostas também serão deletadas.</p>
      <div>
        <Button className={style.btn} title="Não" onClick={onClose} />
        <Button
          className={style.btnDelete}
          title="Sim, deletar"
          onClick={deleteTopic}
        />
      </div>
    </div>
  );
};
