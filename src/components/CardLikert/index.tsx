import style from './cardLikert.module.scss'
import { ImageItems } from './ImageItems'
// import PostService from '../../../services/post.service'

type Props = {
  handleRating?: () => void
}

// const handleRating = () => {
//   PostService.registerRating(data).then(
//     (response: any) => {
//       console.log(response.data)
//     },
//     (error: any) => {
//       console.log('LIKERT: Erro ao avaliar', error.response)
//       // Invalid token
//       if (error.response && error.response.status === 403) {
//         console.log('LIKERT: Erro na autenticação')
//         // AuthService.logout();
//         // navigate("/login");
//         // window.location.reload();
//       }
//     }
//   )
// }

export const CardLikert = ({ handleRating }: Props) => {
  return (
    <div className={style.card}>
      <h1>Gostou da aula? Nos dê sua opinião!</h1>
      <div>
        {ImageItems.map((item) => {
          return (
              <div key={item.id} className={style.col}>
                <img src={item.src} onClick={handleRating} />
                <p>{item.text}</p>
              </div>
          )
        })}
      </div>
    </div>
  )
}
