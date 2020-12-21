import React from 'react';
import ButtonMinus from '../ButtonMinus/ButtonMinus';
import ButtonPlus from '../ButtonPlus/ButtonPlus';
import './styles.scss';

const Slidebar = (props) => {
  return (
    <div className="slidebar">
       <p>{props.title}</p>
          <div className="slidebar__container">
            <text>{props.value}</text>
          <div className="slidebar__container__range">
            <ButtonMinus />
            <input 
              type="range" 
              min={props.min} 
              max={props.max} 
              name={props.name}
              step={props.step}
              value={props.value} 
              onChange={props.changed} />
            <ButtonPlus clicked={props.clicked}/>
          </div>
        </div>
     </div>
   );
};

export default Slidebar;