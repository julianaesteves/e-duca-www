import { useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Forum } from './Forum'
import { Home } from './Home'
import PostService from '../../services/post.service'
import style from './student.module.scss'

export const Student = () => {
  const [chosenComponent, setChosenComponent] = useState(<Home />)
  const [chosenItem, setChosenItem] = useState()

  const [student, setStudent] = useState({
    name: '',
    lastName: ''
  })

  useEffect(() => {
    PostService.getStudent().then(
      (response: any) => {
        setStudent({
          name: response.data.nome,
          lastName: response.data.sobrenome
        })
      },
      (error: any) => {
        console.log('ESTUDANTE/getStudent: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('ESTUDANTE/getStudent: Erro de autenticação')
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
      case 'Página Inicial':
        setChosenComponent(<Home />)
        break
      case 'Fórum de dúvidas': 
        setChosenComponent(<Forum />)
        break
      default:
        setChosenComponent(<Home/>)
    }
  }

  return (
    <div className={style.container}>
    <Sidebar
        name={student.name}
        lastName={student.lastName}
        handleChosenItem={handleChosenItem}
        selectedItem={chosenItem}
      />
      {chosenComponent}
    </div>
  )
}
