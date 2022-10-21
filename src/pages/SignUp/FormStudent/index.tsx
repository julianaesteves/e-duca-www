import style from './formStudent.module.scss';
import { Theme } from '../components/Theme';
import { FormActions, useForm } from '../../../utils/contexts/FormContext';
import { ChangeEvent } from 'react';
import img from '../../../assets/img/image9.png';
import { Button } from '../../../components/Button';

export const FormStudent = () => {
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.email !== '' && state.password !== '') {
      console.log(state);
    } else {
      alert(`Olá, Certifique se todos os campos estão preenchido corretamente`);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setPassword,
      payload: e.target.value,
    });
  };
  const handleCPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setConfirmPassword,
      payload: e.target.value,
    });
  };

  return (
    <>
      <Theme img={img} isActive>
        <div className={style.container}>
          <label>Nome:</label>
          <input
            value={state.name}
            type="text"
            placeholder="Nome"
            onChange={handleNameChange}
          />
          <label>Sobrenome:</label>
          <input
            value={state.lastName}
            type="text"
            placeholder="Sobrenome"
            onChange={handleLastNameChange}
          />
          <label>Data de Nascimento:</label>
          <input
            value={state.birthDate}
            type="date"
            onChange={handleBirthDateChange}
          />
          <label>E-mail:</label>
          <input
            type="email"
            value={state.email}
            placeholder="exemplo@email.com"
            onChange={handleEmailChange}
          />
          <label>Senha:</label>
          <input
            type="password"
            value={state.password}
            placeholder="8 caracteres (letras, números)"
            onChange={handlePasswordChange}
          />
          <label>Confirmar senha:</label>
          <input
            type="password"
            value={state.confirmPassword}
            placeholder="8 caracteres (letras, números)"
            onChange={handleCPasswordChange}
          />
          <Button
            className={style.btnLogin}
            path="/login"
            title="Ir para login"
          />

          <Button
            className={style.btnNext}
            title="Finalizar cadastro"
            onClick={handleNextStep}
          />
        </div>
      </Theme>
    </>
  );
};
