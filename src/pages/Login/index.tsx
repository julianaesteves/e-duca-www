import style from './login.module.scss'
import { Link } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { FormActions, useForm } from '../../utils/contexts/FormContext'
import img from '../../assets/img/image08.png'
import { Header } from '../SignUp/components/Header'
import { Modal } from '../../components/Modal'
import { SignUp } from '../SignUp/components/SignUp'
import { Button } from '../../components/Button'
import  AuthService  from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { state, dispatch } = useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate();

  const data = {
    email: state.email,
    senha: state.password
  }

  const handleNextStep = async (e: any) => {
    e.preventDefault();
    try {
      await AuthService.login(data).then(
        () => {
          navigate("/professor");
          window.location.reload();
        },
        (error: any) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // const apiUrl = 'http://localhost:8080/'

  // const authAxios = axios.create({
  //   baseURL: apiUrl,
  //   headers: { Authorization: `Bearer ${acessToken}` }
  // })

  // const handleNextStep = async() => {
  //   if (state.email !== '' && state.password !== '') {

  //     try {
  //       const response = await api.post("/auth", data);
  //       login(response.data.token);
      
  //     }  catch(error) {
  //       console.log(error)
  //     }

  //     console.log(state)
  //   } else {
  //     alert(`Olá, Certifique se todos os campos estão preenchidos corretamente.`)
  //   }
  // }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setPassword,
      payload: e.target.value
    })
  }

  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.intro}>
          <img src={img} alt="" />
          <h3>Ainda não possui uma conta?</h3>
          <div onClick={() => setIsModalVisible(true)}>
            <a>Cadastrar-se</a>
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
  )
}
