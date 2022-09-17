import style from './footerHome.module.scss';

export default function FooterHome() {
  return (
    <div className={style.footerHome}>
      <div>
        <h4>Sobre nós</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book, Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industrys standard dummy text ever since the 1500s, when an
        </p>
      </div>

      <div>
        <h4>Info</h4>
        <p>Nossa Equipe</p>
        <p>Impacto </p>
        <p>Nossos Apoiadores</p>
      </div>

      <div>
        <h4>Contatos</h4>
        <p>educa@gmail.com.br</p>
        <p>suport@gmail.com</p>
        <p>(11) 99999-9999</p>
      </div>
    </div>
  );
}
