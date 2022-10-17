import style from './supporters.module.scss';
import redV from '../../../../assets/img/Ellipse2.png';
import accenture from '../../../../assets/img/Ellipse3.png';
import deloite from '../../../../assets/img/Ellipse4.png';
import safra from '../../../../assets/img/Ellipse5.png';
import sptech from '../../../../assets/img/Ellipse6.png';

export default function Supporters() {
    return (
        <section className={style.container}>
            <h2 className={style.title}>Apoiadores do projeto e-duca</h2>
            <div className={style.innerContainer}>
                <img src={redV} alt="RedVentures logo" />
                <img src={accenture} alt="Accenture logo" />
                <img src={deloite} alt="Deloite logo" />
                <img src={safra} alt="Safra logo" />
                <img src={sptech} alt="SPTech logo" />

            </div>
            <div className={style.btn}>
                <button>Seja um apoiador!</button>
            </div>


        </section>
    )
}