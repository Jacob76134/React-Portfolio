import React from 'react';
import Page from './components/Page';
import { BodyProvider } from './utils/BodyContext'


function App() {
  return (
    <div className='container'>
      <BodyProvider>
      <Page />
      </BodyProvider>
    </div>
  );
}

export default App;
