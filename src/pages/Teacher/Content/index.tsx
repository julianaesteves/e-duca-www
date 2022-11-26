import { ContentCard } from '../../../components/ContentCard'
import { SearchBar } from '../../../components/SearchBar'
import { useEffect, useState } from 'react'
import PostService from '../../../services/post.service'
import style from './content.module.scss'

export const Content = () => {
  const [content, setContent] = useState<any[]>([])

  useEffect(() => {
    PostService.getAllContent().then(
      (response: any) => {
        setContent(response.data.content)
      },
      (error: any) => {
        console.log('CONTENT/PROFESSOR/getAllContent: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('CONTENT/PROFESSOR/getAllContent: Erro de autenticação')
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
              contentId={post.idConteudo}
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
