import style from './feedbacks.module.scss';

export default function Feedbacks() {

  return (
    <section className={style.feedbacks}>
      <h2 className={style.title}>Feedbacks</h2>
      <div className={style.cards}>
        <div className={style.card}>
          <aside className={style.titleCard}>
            <div className={style.circle}></div>
            <div className={style.textTitle}>
              <h2>Roberto Silva</h2>
              <h3>Aluno</h3>
            </div>
          </aside>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry
            s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className={style.card}>
          <aside className={style.titleCard}>
            <div className={style.circle}></div>
            <div className={style.textTitle}>
              <h2>Marcos Souza</h2>
              <h3>Aluno</h3>
            </div>
          </aside>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry
            s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className={style.card}>
          <aside className={style.titleCard}>
            <div className={style.circle}></div>
            <div className={style.textTitle}>
              <h2>Pablo Lucas</h2>
              <h3>Aluno</h3>
            </div>
          </aside>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry
            s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </section>

  )
}