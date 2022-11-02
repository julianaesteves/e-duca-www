import style from './login.module.scss';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { FormActions, useForm } from '../../utils/contexts/FormContext';
import img from '../../assets/img/image08.png';
import { Header } from '../SignUp/components/Header';
import { Modal } from '../../components/Modal';
import { SignUp } from '../SignUp/components/SignUp';
import { Button } from '../../components/Button';
import axios from 'axios';

export const Login = () => {
  const { state, dispatch } = useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = {
    email: state.email,
    senha: state.password
  }

  const handleNextStep = () => {
    if (state.email !== '' && state.password !== '') {
      axios.post("http://localhost:8080/auth", data)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });

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
          <div onClick={() => setIsModalVisible(true)}>
            <a>Cadastra-se</a>
          </div>
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
            <Button
              className={style.btnEnter}
              title="Entrar"
              onClick={handleNextStep}
            ></Button>
          </div>
        </div>
        {isModalVisible ? (
          <Modal
            isOpen={isModalVisible}
            onClose={() => setIsModalVisible(false)}
          >
            <SignUp onClose={() => setIsModalVisible(false)} />
          </Modal>
        ) : null}
      </div>
    </>
  );
};
