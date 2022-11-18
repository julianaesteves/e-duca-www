import style from './sidebar.module.scss'
import Logo from '../../assets/img/logo.png'
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
}

export const Sidebar = ({ isTeacher, name, occupation, carrerTime, lastName }: Props) => {
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
            name="Débora Souza"
            userType="Aluno(a)"
            labOne="Nivel"
            nivel={1}
          />
        )}
        <div className={style.navigation}>
          {isTeacher ? (
            <>
              <h4>Conteúdos</h4>
              {MenuItemsTeacher.map((item, index) => {
                return (
                  <>
                    <button key={index}>{item.title}</button>
                  </>
                )
              })}
            </>
          ) : (
            <>
              {MenuItemsStudent.map((item, index) => {
                return (
                  <>
                    <button key={index}>{item.title}</button>
                  </>
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
}
