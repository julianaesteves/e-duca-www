import style from './intro.module.scss';
import imgStudents from '../../../../assets/img/Student.png';
import imgTeacher from '../../../../assets/img/Teacher.png';
import iconMedal from '../../../../assets/img/medal.png';
import iconTrophy from '../../../../assets/img/trophy.png';

export default function Intro() {
  return (
    <>
      <h2>Como funciona?</h2>
      <section className={style.container}>
        <img src={imgStudents} alt="Student" />
        <div className={style.introStudent}>
          <img src={iconMedal} alt="Medal star icon" />
          <h3> Benefícios para o estudante</h3>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever the 1500s
          </li>
          <li>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy
          </li>
        </div>

        <div className={style.introTeacher}>
          <img src={iconTrophy} alt="Trophy icon" />
          <h3>Benefícios para o professor </h3>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever the 1500s
          </li>
          <li>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy
          </li>
        </div>
        <img src={imgTeacher} alt="Teacher" />
      </section>
    </>
  );
}
