import React from 'react';
import FirstHead from './FirstHead';
import Home from './Home';
import About from './Founder';
import Services from './Services';
import Address from './Address';
import Testimonials from './Testimonials';
import Work from './Work'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <FirstHead />
    <Home />
    <Work/>
    <About />
    
    <Services />
    <Testimonials />
    <Address/>
  </>
);

export default App;
