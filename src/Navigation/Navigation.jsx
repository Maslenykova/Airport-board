import React from 'react';
import './navigation.scss';

const Navigatopn = () =>{
    return(
       <div className="navigation">
         <div className="navigation__logo">
            <span className="navigation__logo_name">Kyiv</span>
            <p className="navigation__logo_text">Sicorsky Airport</p>
        </div>
        <div className="navigation__info">
        <a href='#' className="navigation__info_link">Пасажирам</a>
        <a href='#' className="navigation__info_link">Послуги IEV</a>
        <a href='#' className="navigation__info_link">VIP</a>
        <a href='#' className="navigation__info_link">Партнерам</a>
        <a href='#' className="navigation__info_link">Пресцентр</a>
        </div>
       </div>
        
    )
};

export default Navigatopn;