import style from './updateTopic.module.scss'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { useState } from 'react'
import PostService from '../../../../services/post.service'

type Props = {
  onClose?: () => void
  // TODO: Tornar obrigatório
  selectedTopic?: any
}

export const UpdateTopic = ({ onClose, selectedTopic }: Props) => {
  const [subject, setSubject] = useState(selectedTopic.titulo)
  const [description, setDescription] = useState(selectedTopic.descricao)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const data = {
    titulo: subject,
    descricao: description
  }

  const updateTopic = () => {
    if (
      (data.titulo != '' &&
        data.descricao != '' &&
        data.titulo != selectedTopic.titulo) ||
      data.descricao != selectedTopic.descricao
    ) {
      PostService.updateTopic(selectedTopic.idTopico, data).then(
        (response: any) => {
          console.log(response.data)
        },
        (error: any) => {
          console.log('STUDENT/FORUM/UpdateTopic: Erro', error.response)
          if (error.response && error.response.status === 403) {
            console.log('STUDENT/FORUM/UpdateTopic: Erro de autenticação')
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
        text="Assunto:"
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
        {errorMessage && <p>Assunto e/ou descrição não podem ser vazios e devem ser diferentes dos valores iniciais.</p>}
      </div>
      <div className={style.cBtn}>
        <Button className={style.btnBack} title="Voltar" onClick={onClose} />
        <Button
          className={style.btnRegister}
          title="Atualizar"
          onClick={updateTopic}
        />
      </div>
    </div>
  )
}
