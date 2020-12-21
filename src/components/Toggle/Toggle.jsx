import React from 'react';
import './styles.scss';

const Toggle = (props) => {
  return (
    <button className="toggle" onClick={props.clicked}>
      <div className='line1'/>
      <div className='line2'/>
      <div className='line3'/>
    </button>
  );
};

export default Toggle;