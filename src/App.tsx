import React from 'react';

import Header from './components/Header';
import Billboard from './components/Billboard';
import Customers from './components/Customers';
import InfoCards from './components/InfoCards';
import Solutions from './components/Solutions';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Billboard />
      <Customers />
      <InfoCards />
      <Solutions />
      <AboutUs />
      <Faq />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;