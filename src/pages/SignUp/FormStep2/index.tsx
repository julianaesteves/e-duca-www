import style from './formStep2.module.scss';
import { Theme } from '../components/Theme';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { FormActions, useForm } from '../../../utils/contexts/FormContext';
import { BtnForm1 } from '../components/Buttons/BtnForm1';
import { BtnForm2 } from '../components/Buttons/BtnForm2';
import { CheckCircleOutline, RadioButtonUnchecked } from '@mui/icons-material';
import img from '../../../assets/img/image11.png';

export const FormStep2 = () => {
  const navigator = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleBack = () => {
    navigator('/cadastro/professor/etapa1');
  };

  const handleNextStep = () => {
    if (state.email !== '' && state.password !== '') {
      console.log(state);
    } else {
      alert(
        `${state.name}, Certifique se todos os campos estão preenchido corretamente`
      );
    }
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
      <Theme img={img}>
        <div className={style.container}>
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
          <div className={style.cCheck}>
            <CheckCircleOutline id={''} />
            <p>Aceito receber promoções e novidades por e-mail.</p>
            <RadioButtonUnchecked id={''} />
            <div>
              <p>Ao me cadastrar afirmo que estou de acordo com os</p>
              <Link to={'/'}>
                <a>Termos de Uso e Privacidade.</a>
              </Link>
            </div>
          </div>

          <BtnForm1 onClick={handleBack}>Voltar</BtnForm1>
          <BtnForm2 onClick={handleNextStep}>Finalizar cadastro</BtnForm2>
        </div>
      </Theme>
    </>
  );
};
