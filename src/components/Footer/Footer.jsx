import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__email">
          <span>Want to reach us?</span>
          <a href="mailto:hi@seathustler.com">hi@seathustler.com</a>
        </div>
        <div className="footer__container__nav">
          <a href='#'>Cheap Flights</a>
          <a href='#'>Save Up To $500</a>
          <a href='#'>Members Love Us</a>
          <a href='#'>About Us</a>
        </div>
        <div className="footer__container__copyright">
          <span>&copy; {new Date().getFullYear()} SeatHustler.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;