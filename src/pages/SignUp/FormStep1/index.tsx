import style from './formStep1.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../../utils/contexts/FormContext';
import { Theme } from '../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { BtnForm1 } from '../components/Buttons/BtnForm1';
import { BtnForm2 } from '../components/Buttons/BtnForm2';
import img from '../../../assets/img/image10.png';

export const FormStep1 = () => {
  const navigator = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleLogin = () => {
    navigator('/Login');
  };

  const handleNextStep = () => {
    if (state.name !== '') {
      navigator('/cadastro/professor/etapa2');
    } else {
      alert('Olá, Certifique se todos os campos estão preenchido corretamente');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };
  const handleBirthDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setBirthDate,
      payload: e.target.value,
    });
  };
  const handleOccupationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setOccupation,
      payload: e.target.value,
    });
  };
  const handleCarrerTimenChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setCarrerTime,
      payload: e.target.value,
    });
  };

  return (
    <>
      <Theme img={img}>
        <div className={style.container}>
          <label>Nome Completo:</label>
          <input
            value={state.name}
            type="text"
            placeholder="nome e sobrenome"
            onChange={handleNameChange}
          />
          <label>Data de Nascimento:</label>
          <input
            value={state.birthDate}
            type="date"
            onChange={handleBirthDateChange}
          />
          <label>Área de atuação:</label>
          <input
            value={state.occupation}
            type="select"
            placeholder="ex álgebra"
            onChange={handleOccupationChange}
          />
          <label>Tempo de carreira:</label>
          <input
            value={state.carrerTime}
            type="number"
            placeholder="informe o periodo"
            onChange={handleCarrerTimenChange}
          />

          <BtnForm1 onClick={handleLogin}>Ir para login</BtnForm1>
          <BtnForm2 onClick={handleNextStep}>Continuar</BtnForm2>
        </div>
      </Theme>
    </>
  );
};
