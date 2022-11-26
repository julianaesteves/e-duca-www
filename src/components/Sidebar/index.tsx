import style from './sidebar.module.scss'
import Logo from '../../assets/img/logo.svg'
import { Perfil } from './Perfil'
import perfilTeacher from '../../assets/img/perfilTeacher.svg'
import perfilStudent from '../../assets/img/perfilStudent.svg'
import { MenuItemsTeacher } from './MenuItemsTeacher'
import { MenuItemsStudent } from './MenuItemsStudent'

type Props = {
  isTeacher?: boolean
  name: string
  lastName: string
  carrerTime?: string
  occupation?: string
  handleChosenItem: any
  selectedItem: any
}

export const Sidebar = ({
  isTeacher,
  name,
  occupation,
  carrerTime,
  lastName,
  handleChosenItem
}: // selectedItem
Props) => {
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
            carrerTime={`${carrerTime} anos`}
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
      </div>
    </>
  )
}
