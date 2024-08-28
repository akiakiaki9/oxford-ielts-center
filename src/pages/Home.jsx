import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Header1 from '../components/Header1'
import Section1 from '../components/Section1'
import Teachers from '../components/Teachers'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Map from '../components/Map'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import RegistrationForm from '../components/RegistrationForm'
import ScrollTop from '../components/ScrollTop'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Navbar2 />
      <Navbar1 />
      <Header1 />
      <Section />
      <Section1 />
      <RegistrationForm />
      <Teachers />
      <Section2 />
      <Section3 />
      <Map />
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </>
  )
};