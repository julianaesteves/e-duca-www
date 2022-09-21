import style from './pillar.module.scss';
import imgTeachers from '../../../../assets/img/image14.png';
import imgSymb from '../../../../assets/img/image12.png';
import imgContent from '../../../../assets/img/image15.png';

export default function Pillar() {
    return (
        <>

            <section className={style.container}>
                <div>
                    <img src={imgContent} alt="Contents" />
                    <p>Conteúdos verificados</p>
                </div>
                <div>
                    <h2 className={style.title}>Nossos pilares</h2>
                    <img src={imgSymb} alt="Symbiosis" />
                    <p>Símbiose</p>
                </div>
                <div>
                    <img src={imgTeachers} alt="Teachers" />
                    <p>Professores especializados</p>
                </div>
            </section>


        </>
    );
}