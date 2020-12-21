import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import Toggle from '../Toggle/Toggle';
import './styles.scss';

const Header = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    const toggle = document.querySelector('.toggle');
    toggle.classList.toggle('cross');
    setShow(!show);
  }

  return (
    <div className="header">
      <div className="header__container content-wrapper">
        <Toggle clicked={showMenu}/>
         <div className="header__container__logo">
           <Logo  className="logo" width={200} />
         </div>
         <div className={`header__container__nav--${show ? 'visible' : 'invisible'}`}>
            <a href='#'>Home</a>
            <a href='#'>Faq</a>
            <a href='#'>Deals</a>
            <a href='#'>Contacts</a>
            <a href='#'>News!</a>
        </div>
        <button 
          className="header__container__button" 
          type="button"
        >
          Suscribe now
        </button>
      </div>
    </div>
  );
};

export default Header;