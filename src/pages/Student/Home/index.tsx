import style from './home.module.scss'
import { ContentCard } from '../../../components/ContentCard'
import { SearchBar } from '../../../components/SearchBar'
import { useEffect, useState } from 'react'
import PostService from '../../../services/post.service'

export const Home = () => {
  const [content, setContent] = useState<any[]>([])
  useEffect(() => {
    PostService.getAllContent().then(
      (response: any) => {
        setContent(response.data)
      },
      (error: any) => {
        console.log('HOME/ESTUDANTE/getAllContent: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('HOME/ESTUDANTE/getAllContent: Erro de autenticação')
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
        <SearchBar placeholder="O que você deseja estudar hoje?" />
        <div className={style.cards}>
        {content?.map((post: any) => (
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
