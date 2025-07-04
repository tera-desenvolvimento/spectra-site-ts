import React from 'react';

import Header from './components/Header';
import Billboard from './components/Billboard';
import Customers from './components/Customers';
import InfoCards from './components/InfoCards';
import Solutions from './components/Solutions';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Billboard />
      <Customers />
      <InfoCards />
      <Solutions />
      <AboutUs />
    </div>
  );
}

export default App;