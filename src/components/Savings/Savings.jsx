import React, { useState } from 'react';
import { ReactComponent as Check } from '../../assets/images/svg/check.svg';
import Slidebar from '../Slidebar/Slidebar';
import './styles.scss';

const Savings = () => {

    const [saving, setSaving] = useState({
    sum: 628
    });
    const [times, setTimes] = useState(2);
    const [people, setPeople] = useState(5);

    const handleChangeTime = (e) => {
        setTimes(e.target.value);
    }

    const handleChangePeople = (e) => {
        setPeople(e.target.value);
    }

  return (
    <div className="savings">
      <h1>Calculate Your Savings!</h1>
      <div className="savings__container content-wrapper">
        <div className="savings__container__months">
          <Slidebar
            title="How many times do you plan to travel in the next 12 months?"
            min={1} max={12}
            value={times}
            step={1}
            name="times"
            changed={(e) => {handleChangeTime(e)}} 
          />
        </div>
        <div className="savings__container__people">
          <Slidebar
            title="How many people will be travelling (including you)?" 
            min={1}
            max={10}
            value={people}
            step={1}
            name="people"
            changed={(e) => {handleChangePeople(e)}}
          />
        </div>
        <div className="savings__container__radio">
          <p>Ar you a member of a SeatHustler.com?</p>
          <div className="savings__container__radio__content">
            <div className="radio">
              <input
                type="radio"
                name="cheap-flights"
                value="Yes, I love cheap flights"
              />
              <label htmlFor="Yes, I love cheap flights">
                Yes, I love cheap flights
              </label>
            </div>
            <div className="radio">
              <input 
                type="radio" 
                name="cheap-flights" 
                value="No, I don't" 
              />
              <label htmlFor="No, I don't">
                No, I don't
              </label>
            </div>
          </div>
        </div>
        <div className="savings__container__sum">
          <h2>Your Total Savings</h2>
          <h1>${saving.sum}</h1>
        </div>
        <button 
          className="savings__container__button" 
          type="button"
        >
          Start Saving
          <Check className="check-icon" width={10}/>
        </button>
      </div>
    </div>
  );
};

export default Savings;