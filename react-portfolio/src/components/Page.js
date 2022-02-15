import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import { useBody } from '../utils/BodyContext';

function Page() {
  const {currentBody} = useBody('AboutMe');

  return (
    <div className='container'>
      <Header/>
      {currentBody.body === "AboutMe" && <About />}
      {currentBody.body === "Contact" && <Contact />}
      {currentBody.body === "Portfolio" && <Portfolio />}
      {currentBody.body === "Resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default Page;