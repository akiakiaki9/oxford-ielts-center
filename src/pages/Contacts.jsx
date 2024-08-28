import React from 'react'
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Title from '../components/Title';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import ScrollTop from '../components/ScrollTop';

export default function Contacts() {
  return (
    <div>
        <Navbar1 />
        <Navbar2 />
        <Title />
        <ContactForm />
        <Map />
        <Footer1 />
        <Footer2 />
        <ScrollTop />
    </div>
  );
};
