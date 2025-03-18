import React from 'react';
import './info.scss';

const InfoForUsers = ()=> {
    return(
          <div className = "info-for-users">
            <a href="#" className = "info-for-users__text"> Шановні пасажири!
                На період пандемії коронавірусу COVID-19
                в процес проведення
                контролю на авіаційну безпеку внесено зміни.
                Через це час проведення
                процедури контролю збільшився,
                відповідно збільшився і час очікування в черзі.</a>
          </div>
    )
};

export default InfoForUsers;