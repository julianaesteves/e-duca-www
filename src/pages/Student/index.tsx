import { useState } from 'react'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import {Sidebar} from '../../components/Sidebar'
import { CardTopic } from './Forum/CardTopic'
import { SelectedTopic } from './Forum/SelectedTopic'
import style from './student.module.scss'
import { Greeting } from '../../components/Greeting'
import img from '../../assets/img/greetingTeacher.svg'
import iconEdit from '../../assets/img/edit.svg'
import iconDelet from '../../assets/img/delet.svg'
import iconVisible from '../../assets/img/visible.svg'
import iconAdd from '../../assets/img/addSmall.svg'
import { RegisterTopic } from './Forum/RegisterTopic'
import { UpdateTopic } from './Forum/UpdateTopic'
import { DeleteTopic } from './Forum/DeleteTopic'
import { Card } from '../Teacher/components/Overview/Card'
import { SearchBar } from '../../components/SearchBar'

export const Student = () => {
  const [isAnswerModalVisible, setAnswerIsModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)

  return (
    <div className={style.container}>
      <Sidebar/>

      <div className={style.innerContainer}>
      <SearchBar />

        <Greeting
          name={'Débora'}
          img={img}
          text={
            'Com dúvidas? Utilize o fórum para se comunicar com outros estudantes'
          }
        />
        <div className={style.cOverviem}>
          <Card
            className={style.cardVisible}
            img={iconVisible}
            text="Ver todos os tópicos"
          />
          <Card
            className={style.cardAdd}
            img={iconAdd}
            text="Adicionar novo tópico"
            onClick={() => setIsAddModalVisible(true)}
          />
        </div>
        <div className={style.cards}>
          <CardTopic
            title="Título da pergunta"
            description="Início do corpo da pergunta...."
            date="Postada em 01/01/22 por Lucas Gestal"
          >
            <Button
              className={style.btn}
              title="Adicionar resposta"
              onClick={() => setAnswerIsModalVisible(true)}
            />
          </CardTopic>
          <CardTopic
            title="Título da pergunta"
            description="Início do corpo da pergunta...."
            date="Postada em 01/01/22 por Lucas Gestal"
          >
            <Button
              className={style.btn}
              title="Adicionar resposta"
              onClick={() => setAnswerIsModalVisible(true)}
            />
          </CardTopic>
          <CardTopic
            title="Título da pergunta"
            description="Início do corpo da pergunta...."
            date="Postada em 01/01/22 por Lucas Gestal"
          >
            <Button
              className={style.btn}
              title="Adicionar resposta"
              onClick={() => setAnswerIsModalVisible(true)}
            />
          </CardTopic>
          <CardTopic
            title="Título da pergunta"
            description="Início do corpo da pergunta...."
            date="Postada em 01/01/22 por Lucas Gestal"
          >
            <div className={style.col}>
              <img src={iconEdit} onClick={() => setIsEditModalVisible(true)} />
              <img
                src={iconDelet}
                onClick={() => setIsDeleteModalVisible(true)}
              />
            </div>
          </CardTopic>
          {isAnswerModalVisible ? (
            <>
              <Modal
                isOpen={isAnswerModalVisible}
                onClose={() => setAnswerIsModalVisible(false)}
              >
                <SelectedTopic onClose={() => setAnswerIsModalVisible(false)} />
              </Modal>
            </>
          ) : isAddModalVisible ? (
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
                <UpdateTopic onClose={() => setIsEditModalVisible(false)} />
              </Modal>
            </>
          ) : isDeleteModalVisible ? (
            <>
              <Modal
                isOpen={isDeleteModalVisible}
                onClose={() => setIsDeleteModalVisible(false)}
              >
                <DeleteTopic onClose={() => setIsDeleteModalVisible(false)} />
              </Modal>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
