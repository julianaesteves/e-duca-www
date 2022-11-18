import { Greeting } from '../../../components/Greeting'
import img from '../../../assets/img/greetingTeacher.svg'
import { ContentCard } from '../../../components/ContentCard'
import Overview from '../Overview'
import { useEffect, useState } from 'react'
// import AuthService from '../../services/auth.service'
import PostService from '../../../services/post.service'
// import { useNavigate } from 'react-router-dom'
import style from './home.module.scss'

export const Home = () => {
  // const navigate = useNavigate();
  const [teacherContent, setTeacherContent] = useState<any[]>([])
  const [teacher, setTeacher] = useState({
    name: '',
    lastName: '',
    carrerTime: '',
    occupation: ''
  })


  useEffect(() => {
    PostService.getTeacher().then(
      (response: any) => {
        setTeacher({
          name: response.data.nome,
          lastName: response.data.sobrenome,
          carrerTime: response.data.inicioAtuacao,
          occupation: response.data.areaAtuacao
        })
      },
      (error: any) => {
        console.log('HOME/Professor/getTeacher: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('HOME/Professor/getTeacher: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )

    PostService.getTeacherContent().then(
      (response: any) => {
        setTeacherContent(response.data.content)
      },
      (error: any) => {
        console.log('HOME/Professor/getTeacherContent: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('HOME/Professor/getTeacherContent: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  }, [])

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
              title={post.titulo}
              hability={post.habilidade.codigo}
              date={post.dataCriacao}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
