import Header from "../../components/Header";
import FooterHome from "../Home/components/FooterHome";
import Footer from "../../components/Footer";
import style from './error.module.scss';
import imageError from "../../assets/img/errorImg.png";

export default function Error(){
    return(
        <>
        <Header/>
        <div className={style.divError} >
        <img src={imageError} alt="Imagem de erro" />
        <p>Ops! Parece que a página que você está procurando não existe.</p>
        <button >Voltar para a página inicial</button>
        </div>
        <FooterHome/>
        <Footer/>
        </>
    )
}