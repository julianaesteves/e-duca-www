import style from './login.module.scss';
import { Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { FormActions, useForm } from '../../utils/contexts/FormContext';
import img from '../../assets/img/image08.png';
import { Header } from '../SignUp/components/Header';
import { BtnForm2 } from '../SignUp/components/Buttons/BtnForm2';

export const Login = () => {
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.password !== '') {
      console.log(state);
    } else {
      alert(
        `Olá, Certifique se todos os campos estão preenchido corretamente.`
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

  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.intro}>
          <img src={img} alt="" />
          <h3>Ainda não possui uma conta?</h3>
          <Link to={'/'}>
            <a>Cadastra-se</a>
          </Link>
        </div>
        <div>
          <h1>Login</h1>
          <div className={style.containerForm}>
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
              placeholder="*******************"
              onChange={handlePasswordChange}
            />
            <span>
              Problemas ao fazer login?
              <Link to={'/'}>
                <a>Recuperar senha</a>
              </Link>
            </span>
            <BtnForm2 onClick={handleNextStep}>Entrar</BtnForm2>
          </div>
        </div>
      </div>
    </>
  );
};
