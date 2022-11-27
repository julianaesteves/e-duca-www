import style from './selectedTopics.module.scss'
import { Button } from '../../../../components/Button'
import { useState } from 'react'
import PostService from '../../../../services/post.service'
import iconEdit from '../../../../assets/img/edit.svg'
import iconDelete from '../../../../assets/img/delet.svg'

type Props = {
  onClose?: () => void
  selectedTopic: any
  student?: any
}

export const SelectedTopic = ({ onClose, selectedTopic, student }: Props) => {
  const [answers] = useState(selectedTopic.respostas)
  const [newAnswer, setNewAnswer] = useState<string>('')
  const [addNewAnswer, setAddNewAnswer] = useState<boolean>(false)
  const [invalid, setInvalid] = useState<boolean>(false)
  // const [currentAnswer, setCurrentAnswer] = useState<number>()

  const data = {
    idTopico: selectedTopic.idTopico,
    resposta: newAnswer
  }


  const saveAnswer = () => {
    if (data.resposta !== '')
      PostService.registerAnswer(data).then(
        (response: any) => {
          console.log(response.data)
        },
        (error: any) => {
          console.log(
            'FORUM/ESTUDANTE/SELECTEDTOPIC/registerAnswer: Erro',
            error.response
          )
          if (error.response && error.response.status === 403) {
            console.log(
              'FORUM/ESTUDANTE/SELECTEDTOPIC/registerAnswer: Erro de autenticação'
            )
          }
        }
      )
    setInvalid(true)
  }

  const handleUpdateAnswer = (answer: number) => {
    // setIsEditModalVisible(true)
    PostService.updateAnswer(answer, data).then(
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
  }

  const handleDeleteAnswer = (answer: number) => {
    // setIsDeleteModalVisible(true)
    PostService.deleteTopic(answer).then(
      (response: any) => {
        console.log(response.data)
      },
      (error: any) => {
        console.log('DELETE/STUDENT/deleteTopic: Erro', error.response)
        if (error.response && error.response.status === 403) {
          console.log('DELETE/STUDENT/deleteTopic: Erro de autenticação')
        }
      }
    )
  }

  return (
    <div className={style.box}>
      <div className={style.row}>
        <div className={style.card}>
          <div>
            <h1>{selectedTopic.titulo}</h1>
            <p>{selectedTopic.descricao}</p>
          </div>
          <div>
            <h6>
              Postada em 01/01/22 por {selectedTopic.nome}{' '}
              {selectedTopic.sobrenome}
            </h6>
            <button
              className={style.btnAdd}
              onClick={() => setAddNewAnswer(true)}
            >
              Adicionar resposta
            </button>
          </div>
        </div>
      </div>

      <div className={style.col}>
        {answers.map((answer: any) => (
          <>
            <div key={answer.idTopico}>
              <p>{answer.resposta}</p>
              Respondido em {answer.dataCriacao} por{' '}
              <span>
                {answer.usuario.nome} {answer.usuario.sobrenome}
              </span>
            </div>
            {student.name == selectedTopic.usuario.nome && (
              <div className={style.col}>
                <img
                  src={iconEdit}
                  onClick={() => handleUpdateAnswer(answer.idResposta)}
                />
                <img
                  src={iconDelete}
                  onClick={() => handleDeleteAnswer(answer.idResposta)}
                />
              </div>
            )}
          </>
        ))}
        {addNewAnswer && (
          <>
            <textarea
              placeholder="Corpo da resposta"
              value={newAnswer}
              onChange={(e: any) => setNewAnswer(e.target.value)}
              onBlur={() => {
                if (newAnswer == '') {
                  setInvalid(true)
                }
              }}
            />
            <Button
              className={style.btn}
              title="Salvar resposta"
              onClick={saveAnswer}
            />
            <div className={style.error}>
              {invalid && <p>Resposta não pode ser vazia.</p>}
            </div>
          </>
        )}
      </div>
      <div className={style.footer}>
        <div>
          <Button className={style.btn} title="Fechar" onClick={onClose} />
        </div>
      </div>
    </div>
  )
}
