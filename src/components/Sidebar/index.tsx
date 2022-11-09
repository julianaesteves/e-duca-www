import style from './sidebar.module.scss'
import Logo from '../../assets/img/logo.png'
import { Perfil } from './Perfil'
import perfilTeacher from '../../assets/img/perfilTeacher.svg'
import perfilStudent from '../../assets/img/perfilStudent.svg'
import { MenuItemsTeacher } from './MenuItemsTeacher'
import { MenuItemsStudent } from './MenuItemsStudent'

type Props = {
  isTeacher?: boolean
}

export const Sidebar = ({ isTeacher }: Props) => {
  return (
    <>
      <div className={style.container}>
        <img className={style.logo} src={Logo} alt="Logotipo da e-duca" />
        {isTeacher ? (
          <Perfil
            photo={perfilTeacher}
            name="Claudio Roberto"
            userType="Professor(a)"
            labOne="Tempo de carreira:"
            carrerTime="10 anos"
            labtwo="Área de atuação:"
            occupation="Matemática"
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
              <h4>Perfil</h4>
              <li>Configurações</li>
              <h4>Conteúdos</h4>
              {MenuItemsTeacher.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })}
            </>
          ) : (
            <>
              {MenuItemsStudent.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
}
