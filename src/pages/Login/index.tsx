import style from './login.module.scss'
import { ChangeEvent, useState } from 'react'
import { FormActions, useForm } from '../../utils/contexts/FormContext'
import img from '../../assets/img/image08.svg'
import { Header } from '../SignUp/components/Header'
import { Modal } from '../../components/Modal'
import { SignUp } from '../SignUp/components/SignUp'
import { Button } from '../../components/Button'
import AuthService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'

export const Login = () => {
  const { state, dispatch } = useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate()
  const [emailError, setEmailError] = useState(false)
  const [senhaError, setSenhaError] = useState(false)
  const [invalid, setInvalid] = useState(false)

  const data = {
    email: state.email,
    senha: state.password
  }

  const handleNextStep = async (e: any) => {
    e.preventDefault()
    if (data.email == '' && data.senha == '') {
      setInvalid(true)
      return
    }

    try {
      await AuthService.login(data).then(
        () => {
          navigate('/professor')
          window.location.reload()
        },
        (error: any) => {
          setInvalid(true)
          console.log(error)
        }
      )
    } catch (err) {
      console.log(err)
      setInvalid(true)
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
    setEmailError(false)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setPassword,
      payload: e.target.value
    })
    setSenhaError(false)
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
            <Input
              text="E-mail"
              type="email"
              value={state.email}
              placeholder="exemplo@email.com"
              onChange={handleEmailChange}
              onBlur={() => {
                if (data.email === '') {
                  setEmailError(true)
                }
              }}
            />
            <div className={style.error}>
              {emailError && <p>Por favor, preencha o email</p>}
            </div>
            <Input
              text="Senha:"
              type="password"
              value={state.password}
              placeholder="*******************"
              onChange={handlePasswordChange}
              onBlur={() => {
                if (data.senha === '') {
                  setSenhaError(true)
                }
              }}
            />
            <div className={style.error}>
              {senhaError && <p>Por favor, preencha a senha</p>}
              {invalid && <p>Email ou senha inválidos. Tente novamente!</p>}
            </div>
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
