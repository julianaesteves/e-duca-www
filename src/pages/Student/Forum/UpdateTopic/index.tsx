import style from './updateTopic.module.scss';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { useState } from 'react';
import PostService from '../../../../services/post.service'

type Props = {
  onClose?: () => void;
  // TODO: Tornar obrigatório
  // id?: number
  topicId?: any
};

export const UpdateTopic = ({ onClose, topicId }: Props) => {
  const [subject, setSubject] = useState();
  const [description, setDescription] = useState();

  const data = {
    subject: subject,
    description: description,
  }

  const updateTopic = () => {
    PostService.updateTopic(topicId, data).then(
      (response: any) => {
        console.log(response.data)
      },
      (error: any) => {
        console.log('STUDENT/FORUM/UpdateTopic: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('STUDENT/FORUM/UpdateTopic: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  };

  return (
    <div className={style.box}>
      <Input
        text="Assunto:"
        type="text"
        placeholder="exemplo"
        value={subject}
        onChange={(e: any) => setSubject(e.target.value)}
      />
      <label>Descrição:</label>
      <textarea
        value={description}
        onChange={(e: any) => setDescription(e.target.value)}
      />

      <div className={style.cBtn}>
        <Button className={style.btnBack} title="Voltar" onClick={onClose} />
        <Button
          className={style.btnRegister}
          title="Atualizar"
          onClick={updateTopic}
        />
      </div>
    </div>
  );
};
