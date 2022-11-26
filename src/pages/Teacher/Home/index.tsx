import { Greeting } from '../../../components/Greeting'
import img from '../../../assets/img/greetingTeacher.svg'
import { ContentCard } from '../../../components/ContentCard'
import Overview from '../Overview'
import { Modal } from '../../../components/Modal'
import iconEdit from '../../../assets/img/edit.svg'
import iconDelete from '../../../assets/img/delet.svg'
import { useEffect, useState } from 'react'
// import AuthService from '../../services/auth.service'
import PostService from '../../../services/post.service'
// import { useNavigate } from 'react-router-dom'
import style from './home.module.scss'
import { DeleteContent } from '../DeleteContent'
import { UpdateContent } from '../UpdateContent'

export const Home = () => {
  // const navigate = useNavigate();
  const [currentId, setCurrentId] = useState()
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [teacherContent, setTeacherContent] = useState<any[]>([])
  const [teacher, setTeacher] = useState({
    name: '',
    lastName: '',
    carrerTime: '',
    occupation: ''
  })

  useEffect(() => {
    PostService.getUser().then(
      (response: any) => {
        setTeacher({
          name: response.data.nome,
          lastName: response.data.sobrenome,
          carrerTime: response.data.inicioAtuacao,
          occupation: response.data.areaAtuacao
        })
      },
      (error: any) => {
        console.log('HOME/Professor/getUser: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('HOME/Professor/getUser: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )

    PostService.getUserContent().then(
      (response: any) => {
        setTeacherContent(response.data.content)
      },
      (error: any) => {
        console.log('HOME/Professor/getUserContent: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('HOME/Professor/getUserContent: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  }, [])

  
  const handleEditClick = (id: any) => {
    setIsEditModalVisible(true)
    setCurrentId(id)
  }

  const handleDeleteClick = (id: any) => {
    setIsDeleteModalVisible(true)
    setCurrentId(id)
  }

  
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <Greeting
          name={teacher.name}
          img={img}
          text={'Pronto para começar uma nova aula?'}
        />
        <Overview conteudos={teacherContent.length} avaliacoes={0} />
        <div className={style.text}>
          <h2>Meus conteúdos</h2>
          <span>Ver todos</span>
        </div>
        <div className={style.cards}>
          {teacherContent?.map((post: any) => (
            <ContentCard
              key={post.idConteudo}
              contentId={post.idConteudo}
              title={post.titulo}
              hability={post.habilidade.codigo}
              date={post.dataCriacao}
            >
              <div className={style.col}>
                <img
                  src={iconEdit}
                  onClick={() => handleEditClick(post.idConteudo)}
                />
                <img
                  src={iconDelete}
                  onClick={() => handleDeleteClick(post.idConteudo)}
                />
              </div>
            </ContentCard>
          ))}
        </div>
      </div>
      {isDeleteModalVisible && (
        <Modal
          isOpen={isDeleteModalVisible}
          onClose={() => setIsDeleteModalVisible(false)}
        >
          <DeleteContent
            contentId={currentId}
            onClose={() => setIsDeleteModalVisible(false)}
          />
        </Modal>
      )}
      {isEditModalVisible && (
        <Modal
          isOpen={isEditModalVisible}
          onClose={() => setIsEditModalVisible(false)}
        >
          <UpdateContent
            contentId={currentId}
            onClose={() => setIsEditModalVisible(false)}
          />
        </Modal>
      )}
    </div>
  )
}
