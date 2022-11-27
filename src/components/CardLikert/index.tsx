import style from './cardLikert.module.scss'
import { ImageItems } from './ImageItems'
import PostService from '../../services/post.service'

type Props = {
  contentId: any
}

const handleRating = (text: string, contentId: Props) => {
  const data = {
    idConteudo: contentId,
    avaliacao: text
  }

  PostService.registerRating(data).then(
    (response: any) => {
      console.log(response.data)
    },
    (error: any) => {
      console.log('LIKERT: Erro ao avaliar', error.response)
      if (error.response && error.response.status === 403) {
        console.log('LIKERT: Erro na autenticação')
      }
    }
  )
}

export const CardLikert = ({ contentId }: Props) => {
  return (
    <div className={style.card}>
      <h3>Gostou da aula? Nos dê sua opinião!</h3>
      <div>
        {ImageItems.map((item) => {
          return (
            <div key={item.id} className={style.col}>
              <img
                src={item.src}
                onClick={() => handleRating(item.text, contentId)}
              />
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
