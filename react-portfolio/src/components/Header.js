import React from 'react';
import Nav from './Nav'

export default function Header() {
  return (  
    <header>
      <div className='headerContent'>
        <div className='titleBlock'>
          <h1>THIS</h1>
          <h2>IS A REACT PORTFOLIO</h2>
        </div>
        <Nav />
      </div>
    </header>
    
    );
}
