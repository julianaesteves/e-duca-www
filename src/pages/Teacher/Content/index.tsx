import { ContentCard } from '../../../components/ContentCard'
import { SearchBar } from '../../../components/SearchBar'
import { useEffect, useState } from 'react'
import PostService from '../../../services/post.service'
import style from './content.module.scss'
import { Reading } from '../../../components/Reading'
import { Button } from '../../../components/Button'
import { VideoClass } from '../../../components/VideoClass'

export const Content = () => {
  const [search, setSearch] = useState('')
  console.log(search)

  const [content, setContent] = useState<any[]>([])
  const [isContentClicked, setIsContentClicked] = useState<boolean>(false)
  const [contentClicked, setContentClicked] = useState<any>({})
  const [isVideo, setIsVideo] = useState<boolean>(false)

  useEffect(() => {
    PostService.getAllContent().then(
      (response: any) => {
        setContent(response.data.content)
      },
      (error: any) => {
        console.log('CONTENT/PROFESSOR/getAllContent: Erro', error.response)

        if (error.response && error.response.status === 403) {
          console.log('CONTENT/PROFESSOR/getAllContent: Erro de autenticação')
        }
      }
    )
  }, [])

  function handleContentClick(post: any) {
    console.log(post)
    setContentClicked({
      titulo: post.titulo,
      video: post.urlVideo,
      nome: post.usuario.nome,
      sobrenome: post.usuario.sobrenome,
      categoria: post.habilidade.codigo,
      texto: post.texto
    })

    if (post.urlVideo != null) {
      setIsVideo(true)
    }
    setIsContentClicked(true)
  }

  return (
    <div className={style.container}>
      {isContentClicked ? (
        <>
          {isVideo ? (
            <VideoClass
              contentId={contentClicked.id}
              name={contentClicked.nome}
              lastName={contentClicked.sobrenome}
              category={contentClicked.categoria}
              video={contentClicked.video}
              title={contentClicked.titulo}
            />
          ) : (
            <Reading
              contentId={contentClicked.id}
              title={contentClicked.titulo}
              text={contentClicked.texto}
            />
          )}
          <Button
            title="Voltar"
            // TODO: arrumar a estilização do botão
            className={'batatinha'}
            onClick={() => {
              setIsContentClicked(false)
              setIsVideo(false)
            }}
          />
        </>
      ) : (
        <div className={style.innerContainer}>
          <SearchBar
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
          <div className={style.cards}>
            {content &&
            content
              .filter((post) => {
                if (search == '') {
                  return post
                } else if (
                  post.titulo.toLowerCase().includes(search.toLowerCase())
                ) {
                  return post
                }
              })
              .map((post: any) => (
                  <ContentCard
                    contentId={post.idConteudo}
                    key={post.idConteudo}
                    title={post.titulo}
                    hability={post.habilidade.codigo}
                    date={post.dataCriacao}
                onClick={() => handleContentClick(post)}
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  )
}
