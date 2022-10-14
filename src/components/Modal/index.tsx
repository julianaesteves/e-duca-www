import style from './modal.module.scss';
import student from '../../assets/img/image9.png';
import teacher from '../../assets/img/image10.png';
import { BtnStudent } from '../../pages/SignUp/components/Buttons/BtnStudent';
import { BtnTeacher } from '../../pages/SignUp/components/Buttons/BtnTeacher';
import { Link } from 'react-router-dom';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = React.useRef(null);

  const handleOverlaClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <>
      <div
        className={style.container}
        ref={overlayRef}
        onClick={handleOverlaClick}
      >
        <div className={style.box}>
          <span onClick={onClose} className={'fas fa-times'}></span>
          <h2>Quero me cadastrar como</h2>
          <div className={style.cOption}>
            <img
              className={style.image}
              src={student}
              alt="student reference image"
            />
            <img
              className={style.image}
              src={teacher}
              alt="teacher reference image"
            />
            <BtnStudent />
            <BtnTeacher />
          </div>
          <h3>Já tenho uma conta!</h3>
          <Link className={style.link} to={'/login'}>
            Fazer login
          </Link>
        </div>
      </div>
    </>
  ) : null;
};
