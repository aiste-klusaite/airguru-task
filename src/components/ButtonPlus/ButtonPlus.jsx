import React from 'react';
import './styles.scss';

const ButtonPlus = (props) => {
  return (
    <button 
      className="button-plus" 
      type="submit" 
     onClick={props.clicked}
    >
      <span>+</span>
    </button>
  );
};

export default ButtonPlus;