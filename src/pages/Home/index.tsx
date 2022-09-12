import './styleHome.css';
import Header from '../../components/Header';
import img from '../../assets/img/galax.png';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <>
      <Header />
      <section className="container-header">
        <h1>
          A plataforma que faz o <br /> aprendizado decolar
        </h1>
        <h6>
          <p className="subtitle">
            Com conteúdos especializados na área de exatas
          </p>
          <p>
            a <span>e-duca</span> une professores e estudantes do ensino
            <br />
            médio em uma cadeia simbiótica de ensinar e <br />
            aprender. Damos suporte ao ensino acadêmico e <br />
            solucionamos a busca por materiais de qualidade <br />
            reunindo-o todos em uma só plataforma.
          </p>
        </h6>
        <div className="img-header">
          <img id="image" src={img} alt="space galax" />
        </div>
      </section>
    </>
  );
}
