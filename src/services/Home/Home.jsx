import React from 'react';

// Components
import Navigation from './components/Navigation/Navigation.jsx';
import Splash from './components/Splash/Splash.jsx';
import Description from './components/Description/Description.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

const Home = (props) => {
  return (
    <div>
      <Navigation />
      <Splash callback={props.callback} homePhoto={props.photos.home} />
      <Description />
      <Gallery callback={props.callback} photos={props.photos} />
    </div>
  );
};

export default Home;
