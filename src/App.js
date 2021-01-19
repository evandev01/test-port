import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Header from './components/HeaderHome';
import NavTabs from './components/NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import homeImage from './assets/homeImage.jpg';
import aboutImage from './assets/aboutImage.jpg';
import contactImage from './assets/contactImage.png';
// import edevName1 from './assets/headerAssets/header01/edev01.jpg'
// import edevName2 from './assets/headerAssets/header02/edev02.jpg'
import edevName3 from './assets/headerAssets/header03/edev03.jpg'


function App() {
  const [headerImage, setHeaderImage] = useState();
  const [mainImage, setMainImage] = useState();
  // const [navState, setNavState] = useState(false);
  const currentLocation = (window.location.pathname);

  useEffect(() => {
    handleChange();
  });

  function handleChange() {
    if (currentLocation === '/') {
      // setHeaderImage(edevName1);
      setMainImage(homeImage);
      // setNavState(false);
    } else if (currentLocation === '/about') {
      // setHeaderImage(edevName3);
      setMainImage(aboutImage);
      // setNavState(true);
    } else if (currentLocation === '/contact') {
      // setHeaderImage(edevName2);
      setMainImage(contactImage);
      // setNavState(true);
    }
  };

  const divStyle = {
    backgroundImage: 'url(' + mainImage + ')'
  };

  return (
    <Router>
      <div className='mainDiv' style={divStyle}>

        {/* <Header background={headerImage} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />

      </div>
    </Router>
  )
};

export default App;
