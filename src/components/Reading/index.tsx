import style from './reading.module.scss'

type Props = {
  title: string
  text: string
}

export const Reading = ({ title, text }: Props) => {
  return (
    <aside className={style.container}>
      <h1>{title}</h1>
      <p>{text}</p>
    </aside>
  )
}
