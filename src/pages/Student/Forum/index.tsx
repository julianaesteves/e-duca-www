import style from './forum.module.scss'
import { useEffect, useState } from 'react'
import { Modal } from '../../../components/Modal'
import { CardTopic } from './CardTopic'
import { SelectedTopic } from './SelectedTopic'
import { Greeting } from '../../../components/Greeting'
import { RegisterTopic } from './RegisterTopic'
import { UpdateTopic } from './UpdateTopic'
import { DeleteTopic } from './DeleteTopic'
import { Card } from '../../Teacher/Overview/Card'
import img from '../../../assets/img/greetingTeacher.svg'
import iconEdit from '../../../assets/img/edit.svg'
import iconDelete from '../../../assets/img/delet.svg'
import iconVisible from '../../../assets/img/visible.svg'
import iconAdd from '../../../assets/img/addSmall.svg'
import PostService from '../../../services/post.service'

export const Forum = () => {
  const [isAnswerModalVisible, setAnswerIsModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [currentId, setCurrentId] = useState()

  const handleEditClick = (id: any) => {
    setIsEditModalVisible(true)
    setCurrentId(id)
  }

  const handleDeleteClick = (id: any) => {
    setIsDeleteModalVisible(true)
    setCurrentId(id)
  }

  const [topics, setTopics] = useState<any[]>([{}])

  const [student, setStudent] = useState({
    name: '',
    lastName: ''
  })

  useEffect(() => {
    PostService.getUser().then(
      (response: any) => {
        setStudent({
          name: response.data.nome,
          lastName: response.data.sobrenome
        })
      },
      (error: any) => {
        console.log('FORUM/ESTUDANTE/getUser: Erro', error.response)
        if (error.response && error.response.status === 403) {
          console.log('FORUM/ESTUDANTE/getUser: Erro de autenticação')
        }
      }
    )

    PostService.getTopic().then(
      (response: any) => {
        console.log("RESPOSTA DE GET TOPIC: " + response.data)
        console.log("Response é igual a nulo ? " + response.data == null)
        console.log("Response é igual a undefined ? " + response.data == undefined)
        console.log("Response é igual a string vazia ? " + response.data == "")
        
        console.log(typeof response.data)
        setTopics(response.data)
        
      },
      (error: any) => {
        console.log('FORUM/ESTUDANTE/getTopic: Erro', error.response)
        if (error.response && error.response.status === 403) {
          console.log('FORUM/ESTUDANTE/getTopic: Erro de autenticação')
        }
      }
    )
  }, [])

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <Greeting
          name={student.name}
          img={img}
          text={
            'Com dúvidas? Utilize o fórum para se comunicar com outros estudantes'
          }
        />
        <div className={style.cOverviem}>
          <Card
            className={style.cardVisible}
            img={iconVisible}
            text={'Ver todos os tópicos'}
          />
          <Card
            className={style.cardAdd}
            img={iconAdd}
            text="Adicionar novo tópico"
            onClick={() => setIsAddModalVisible(true)}
          />
        </div>
        <div className={style.cards}>
          {topics?.map((topic: any) => (
            <>
              <CardTopic
                // onClick={() => setAnswerIsModalVisible(true)}
                key={topic.idTopico}
                title={topic.titulo}
                description={topic.descricao}
                date={topic.dataCriacao}
                answers={topic.respostas != null ? topic.respostas.length : ""}
                // name={topic.usuario.nome}
                // lastName={topic.usuario.sobrenome}
              >
                <div className={style.col}>
                  <img
                    src={iconEdit}
                    onClick={() => handleEditClick(topic.idTopico)}
                  />
                  <img
                    src={iconDelete}
                    onClick={() => handleDeleteClick(topic.idTopico)}
                  />
                </div>
              </CardTopic>
              {isAnswerModalVisible && (
                <Modal
                  isOpen={isAnswerModalVisible}
                  onClose={() => setAnswerIsModalVisible(false)}
                >
                  <SelectedTopic
                    subject={topic.titulo}
                    description={topic.descricao}
                    // name={topic.usuario.nome}
                    // lastName={topic.usuario.sobrenome}
                    onClose={() => setAnswerIsModalVisible(false)}
                  />
                </Modal>
              )}
            </>
          ))}

          {isAddModalVisible ? (
            <>
              <Modal
                isOpen={isAddModalVisible}
                onClose={() => setIsAddModalVisible(false)}
              >
                <RegisterTopic onClose={() => setIsAddModalVisible(false)} />
              </Modal>
            </>
          ) : isEditModalVisible ? (
            <>
              <Modal
                isOpen={isEditModalVisible}
                onClose={() => setIsEditModalVisible(false)}
              >
                <UpdateTopic
                  topicId={currentId}
                  onClose={() => setIsEditModalVisible(false)}
                />
              </Modal>
            </>
          ) : isDeleteModalVisible ? (
            <>
              <Modal
                isOpen={isDeleteModalVisible}
                onClose={() => setIsDeleteModalVisible(false)}
              >
                <DeleteTopic
                  topicId={currentId}
                  onClose={() => setIsDeleteModalVisible(false)}
                />
              </Modal>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
