import style from './registerQuestion.module.scss'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { useState } from 'react'
import PostService from '../../../../services/post.service'

type Props = {
  onClose?: () => void
}

export const RegisterTopic = ({ onClose }: Props) => {
  const [subject, setSubject] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const data = {
    titulo: subject,
    descricao: description
  }

  const registerQuestion = () => {
    if (data.titulo != '' && data.descricao != '') {
      PostService.registerTopic(data).then(
        (response: any) => {
          console.log(response.data)
        },
        (error: any) => {
          console.log('STUDENT/FORUM/RegisterTopic: Erro', error.response)
          if (error.response && error.response.status === 403) {
            console.log('STUDENT/FORUM/RegisterTopic: Erro de autenticação')
          }
        }
      )
    } else {
      setErrorMessage(true)
    }
  }

  return (
    <div className={style.box}>
      <Input
        text="Assunto do tópico:"
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
      <div className={style.error}>
        {errorMessage && <p>Assunto e/ou descrição não podem ser vazios.</p>}
      </div>
      <div className={style.cBtn}>
        <Button className={style.btnBack} title="Voltar" onClick={onClose} />
        <Button
          className={style.btnRegister}
          title="Cadastrar"
          onClick={registerQuestion}
        />
      </div>
    </div>
  )
}
