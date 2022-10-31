import Header from "../../components/Header";
import FooterHome from "../Home/components/FooterHome";
import Footer from "../../components/Footer";
import style from './error.module.scss';
import imageError from "../../assets/img/errorImg.png";
import { useNavigate } from 'react-router-dom';

export default function Error(){
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <div className={style.divError} >
        <img src={imageError} alt="Imagem de erro" />
        <p>Ops! Parece que a página que você está procurando não existe.</p>
        <button onClick={() => navigate(-1)} >Voltar para a página inicial</button>
        </div>
        <FooterHome/>
        <Footer/>
        </>
    )
}