import React from 'react';
import './styles.scss';

const ButtonMinus = (props) => {
  return (
    <button 
      className="button-minus" 
      type="submit" 
      onClick={props.clicked}
    >
      <span>-</span>
    </button>
  );
};

export default ButtonMinus;