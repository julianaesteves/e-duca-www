import style from './sidebar.module.scss'
import Logo from '../../assets/img/logo.svg'
import { Perfil } from './Perfil'
import perfilTeacher from '../../assets/img/perfilTeacher.svg'
import perfilStudent from '../../assets/img/perfilStudent.svg'
import { MenuItemsTeacher } from './MenuItemsTeacher'
import { MenuItemsStudent } from './MenuItemsStudent'
import { Button } from '../Button'
import AuthService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

type Props = {
  isTeacher?: boolean
  name: string
  lastName: string
  careerTime?: string
  occupation?: string
  handleChosenItem: any
  selectedItem: any
}

export const Sidebar = ({
  isTeacher,
  name,
  occupation,
  careerTime,
  lastName,
  handleChosenItem
}: // selectedItem
Props) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    AuthService.logout()
    navigate('/login')
    window.location.reload()
  }

  return (
    <>
      <div className={style.container}>
        <img className={style.logo} src={Logo} alt="Logotipo da e-duca" />
        {isTeacher ? (
          <Perfil
            photo={perfilTeacher}
            name={`${name} ${lastName}`}
            userType="Professor(a)"
            labOne="Tempo de carreira:"
            careerTime={`${careerTime} anos`}
            labtwo="Área de atuação:"
            occupation={occupation}
          />
        ) : (
          <Perfil
            photo={perfilStudent}
            name={`${name} ${lastName}`}
            userType="Aluno(a)"
            labOne="Nivel"
            nivel={1}
          />
        )}
        <div className={style.navigation}>
          {isTeacher ? (
            <>
              <h4>Conteúdos</h4>
              {MenuItemsTeacher.map((item) => {
                return (
                  <button onClick={(e) => handleChosenItem(e)} key={item.id}>
                    {item.title}
                  </button>
                )
              })}
            </>
          ) : (
            <>
              {MenuItemsStudent.map((item) => {
                return (
                  <button onClick={(e) => handleChosenItem(e)} key={item.id}>
                    {item.title}
                  </button>
                )
              })}
            </>
          )}
        </div>
        <Button onClick={handleLogout} className={style.btn} title="Sair" />
      </div>
    </>
  )
}
