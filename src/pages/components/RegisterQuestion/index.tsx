import style from './registerQuestion.module.scss';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { useState } from 'react';

type Props = {
  onClose?: () => void;
};

export const RegisterQuestion = ({ onClose }: Props) => {
  const [subject, setSubject] = useState();
  const [description, setDescription] = useState();

  const handleRegister = () => {
    console.log();
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
          title="Cadastrar"
          onClick={handleRegister}
        />
      </div>
    </div>
  );
};
