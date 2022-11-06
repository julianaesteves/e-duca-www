import style from './perfil.module.scss';

type Props = {
  photo: any;
  name: string;
  userType: string;
  carrerTime?: string;
  occupation?: string;
  nivel?: number;
  labOne?: String;
  labtwo?: String;

};

export const Perfil = ({
  photo,
  name,
  userType,
  carrerTime,
  occupation,
  nivel,
  labOne,
  labtwo,


}: Props) => {
  return (
    <>
      <div className={style.card}>
        <img src={photo} />
        <h3>{name}</h3>
        <h4>{userType}</h4>
        {nivel}
        <span className={style.info}>
          <p>{labOne}</p>
          {carrerTime}
          <p>{labtwo}</p>
          {occupation}
        </span>
      </div>
    </>
  );
};
