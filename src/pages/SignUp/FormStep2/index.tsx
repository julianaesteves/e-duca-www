import style from './formStep2.module.scss'
import { Theme } from '../components/Theme'
import { Link } from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import { FormActions, useForm } from '../../../utils/contexts/FormContext'
import { CheckCircleOutline, RadioButtonUnchecked } from '@mui/icons-material'
import img from '../../../assets/img/image11.svg'
import { Button } from '../../../components/Button'
import axios from 'axios'

export const FormStep2 = () => {
  const { state, dispatch } = useForm()

  const data = {
    nome: state.name,
    sobrenome: state.lastName,
    email: state.email,
    dataNasc: state.birthDate,
    senha: state.password,
    inicioAtuacao: state.carrerTime,
    areaAtuacao: state.occupation
  }

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])

  const handleNextStep = () => {
    if (state.email !== '' && state.password !== '') {
      axios.post("http://educa-application-web.eastus.cloudapp.azure.com/api/usuarios/professores/", data)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(state);
    } else {
      alert(
        `${state.name}, Certifique se todos os campos estão preenchido corretamente`
      )
    }
  }

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
  const handleCPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setConfirmPassword,
      payload: e.target.value
    })
  }

  return (
    <>
      <Theme img={img} isTeacher>
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

          <Button
            className={style.btnLogin}
            title="Voltar"
            path="/cadastro/professor/etapa1"
          />

          <Button
            className={style.btnNext}
            title="Finalizar cadastro"
            onClick={handleNextStep}
          />
        </div>
      </Theme>
    </>
  )
}
