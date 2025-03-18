import React from 'react';
import Navigatopn from './Navigation/Navigation';
import MainSerch from './MainSearch/MainSearch';
import InfoForUsers from './InfoForUsers/InfoForUsers';
import Footer from './Footer/Footer';

const App = () =>{
    return(
        <div>
              <Navigatopn/>
              <MainSerch/>
              <InfoForUsers/>
              <Footer/>
        </div>
       
    )
}

export default App;