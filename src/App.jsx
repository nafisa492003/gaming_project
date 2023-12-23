import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/Nav_component';
import Banner from './components/Banner';
import About_part from './components/About_part';
import Popular from './components/Popular';
import Tournament from './components/Tournament';
import Sale_one from './components/Sale_one';
import Store_part from './components/Store_part';
import Team from './components/Team';
import Faq_part from './components/Faq_part';
import Footer_part from './components/Footer_part';

const App = () => {
  return (
    <>
    <NavScrollExample/>
    <Banner/>
    <About_part/>
    <Popular/>
    <Tournament/>
   <Sale_one/>
  <Store_part/>
  <Team/>
  <Faq_part/>
  <Footer_part/>
    </>
  )
}

export default App