import { Sidebar } from '../../components/Sidebar'
// import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import AuthService from '../../services/auth.service'
import PostService from '../../services/post.service'
import style from './teacher.module.scss'
import { Home } from './Home'
import { Content } from './Content'

export const Teacher = () => {
  const [chosenComponent, setChosenComponent] = useState(<Home />)
  const [chosenItem, setChosenItem] = useState()
  // const navigate = useNavigate()

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
        console.log('PROFESSOR/getUser: Erro ', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('PROFESSOR/getUser: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  }, [])

  const handleChosenItem = (chosen: any) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const chosenItem = chosen.target.innerText
    setChosenItem(chosenItem)
    switch (chosenItem) {
      case 'Meus conteúdos':
        setChosenComponent(<Home />)
        break
      case 'Ver todos': // TODO: criar pagina de todos os conteúdos
        setChosenComponent(<Content />)
        break
      // case 'Avaliações': // TODO: redirecionar para gráfico do power BI
      //   setChosenComponent(<Configuracoes />)
      //   break
      default:
        setChosenComponent(<Home />)
    }
  }

  return (
    <div className={style.container}>
      <Sidebar
        isTeacher
        name={teacher.name}
        lastName={teacher.lastName}
        occupation={teacher.occupation}
        carrerTime={teacher.carrerTime}
        handleChosenItem={handleChosenItem}
        selectedItem={chosenItem}
      />
      {chosenComponent}
    </div>
  )
}
