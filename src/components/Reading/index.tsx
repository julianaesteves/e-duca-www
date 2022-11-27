import { CardLikert } from '../CardLikert'
import style from './reading.module.scss'

type Props = {
  title: string
  text: string
  contentId: number
}

export const Reading = ({ title, text, contentId }: Props) => {
  return (
    <aside className={style.container}>
      <h1>{title}</h1>
      <p>{text}</p>

      <CardLikert contentId={contentId}/>
    </aside>
  )
}
