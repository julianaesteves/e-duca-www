import style from './selectedTopics.module.scss';
import { Button } from '../../../../components/Button';
import { useState } from 'react';
type Props = {
  onClose?: () => void;
};

export const SelectedTopic = ({ onClose }: Props) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const addInputAnswer = (e: any) => {
    e.preventDefault();

    setAnswers([...answers, '']);
  };

  const handleChangeAnswer = (e: any, index: number) => {
    answers[index] = e.target.value;
    setAnswers([...answers]);
  };

  return (
    <div className={style.box}>
      <div className={style.row}>
        <div className={style.card}>
          <div>
            <h1>Título da pergunta</h1>
            <p>Corpo da pergunta.</p>
          </div>
          <div>
            <h6>Postada em 01/01/22 por Lucas Gestal</h6>
            <button className={style.btnAdd} onClick={addInputAnswer}>
              Adicionar resposta
            </button>
          </div>
        </div>
      </div>

        <div className={style.col}>
          {answers.map((answer, index) => (
            <>
              <label>{`Resposta ${index + 1}`}</label>
              <textarea
                key={index}
                placeholder="Corpo da resposta"
                value={answer}
                onChange={(e: any) => handleChangeAnswer(e, index)}
              />
            </>
          ))}
        </div>
        <div className={style.footer}>
          <div>
            <Button className={style.btn} title="Fechar" onClick={onClose} />
          </div>
        </div>
      </div>
  );
};
