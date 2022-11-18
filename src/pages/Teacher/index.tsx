import { Greeting } from '../../components/Greeting'
import img from '../../assets/img/greetingTeacher.svg'
import { Sidebar } from '../../components/Sidebar'
import style from './teacher.module.scss'
import { ContentCard } from '../../components/ContentCard'
import Overview from './Overview'
import { useEffect, useState } from 'react'
// import AuthService from '../../services/auth.service'
import PostService from '../../services/post.service'
// import { useNavigate } from 'react-router-dom'

export const Teacher = () => {
  const [teacherContent, setTeacherContent] = useState<any[]>([])
  const [teacher, setTeacher] = useState({
    name: '',
    lastName: '',
    carrerTime: '',
    occupation: ''
  })

  // const navigate = useNavigate();

  // TODO: Jogar esse useEffect para a página de todos os conteúdos
  // const [content, setContent] = useState<any[]>([])
  // useEffect(() => {
  //   PostService.getAllContent().then(
  //     (response: any) => {
  //       setContent(response.data)
  //     },
  //     (error: any) => {
  //       console.log('Private page', error.response)
  //       // Invalid token
  //       if (error.response && error.response.status === 403) {
  //         console.log('Deu problema')
  //         // AuthService.logout();
  //         // navigate("/login");
  //         // window.location.reload();
  //       }
  //     }
  //   )
  // }

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
        console.log('Caquita no get nome', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('Deu problema no nome')
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
        console.log('Private page', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('Deu problema no conteudo')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  }, [])

  return (
    <div className={style.container}>
      <Sidebar
        isTeacher
        name={teacher.name}
        lastName={teacher.lastName}
        occupation={teacher.occupation}
        carrerTime={teacher.carrerTime}
      />
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
