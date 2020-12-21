import React, { useState } from 'react';
import { ReactComponent as Mail} from '../../assets/images/svg/mail.svg';
import { ReactComponent as Waves} from '../../assets/images/svg/waves.svg';
import axios from 'axios';
import './styles.scss';


const Suscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = email;

    if(validEmail !== '') {
      const server = 'us7';
      const apiKey = '6adc8a4b9c348dafa3e40b08688352e4-us7';
      const listId = '035444f105';
      const url = `https://${server}.api.mailchimp.com/3.0/list/${listId}/members/`;

      if(regex.exec(validEmail)){
        axios.post(url, {
          status: 'subscribed',
          email_address: email
        },
        {
          headers: {
            'Authorization': apiKey,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": '*',
          }
        })
          .then((response) => {
             setMessage('Thanks! We received your E-mail');
             console.log(response.data)
          })
            .catch((error) => {
              console.log(error.data);
              setError('Something wrong :(')
          })    
         } else {
          setError('Oops, Your E-mail is not correct');
         }
       } else {
        setError('Please, fill a field');
     }
   }

  return (
    <div className="suscribe content">
      <div className="suscribe__container content-wrapper">
        {(message.length > 0 && <div className="message"><h4>{message}</h4></div>) || (error.length > 0 && <div className="error"><h4>{error}</h4></div>)}
        <div className="suscribe__container__heading">
          <h1>Grab Flight Deals While They're Hot</h1>
        </div>
        <div className="suscribe__container__mail">
          <div className="suscribe__container__mail__input">
            <input 
              type="email" 
              placeholder="Enter Your E-Mail" 
              onChange={(e) => onChangeEmail(e)}
            />
            <Mail className="mail-icon" width={20} />
          </div>
          <button 
            type="sumbit" 
            onClick={(event) => onHandleSubmit(event)}
          >
            Suscribe for the best deals
          </button>
        </div>
      </div>
        <Waves className="wave-cover"/>
    </div>
  ); 
};

export default Suscribe;
