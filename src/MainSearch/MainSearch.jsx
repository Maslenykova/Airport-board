import React, { Component } from 'react';
import './search.scss';

class MainSerch extends Component{
    render(){
        return(
            <div className="main-search">
                <h2 className="main-search_title">Пошук рейсу</h2>
                <div>
                 <input type="text"  className="search"/>
                <button className="btn">Знайти</button>
                </div>
                <div>
                <button className="search__btn">Виліт усі рейси</button>
                <button className="search__btn">Прілит усі рейси</button>
                </div>
               
            </div>
        )
    }
};

export default MainSerch;