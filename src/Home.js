import React from 'react';
import Navigation from './Navigation';
import HeaderContent from './HeaderContent';
import Cards from "./Cards";
import FeaturedJob from "./FeaturedJob";
import MainContent from "./MainContent";
import JoinContent from './JoinContent';
import Footer from './Footer';

function Home() {
    return (
        <div className="Home">
          <Navigation/>
          <HeaderContent/>
          <Cards/>
          <FeaturedJob/>
          <MainContent/>
          <JoinContent/>
          <Footer/> 
        </div>
    )
}

export default Home;
