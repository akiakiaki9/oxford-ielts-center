import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Title from '../components/Title'
import Teachers from '../components/Teachers'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import ScrollTop from '../components/ScrollTop'

export default function Teacher() {
  return (
    <div>
        <Navbar2 />
        <Navbar1 />
        <Title />
        <Teachers />
        <Footer1 />
        <Footer2 />
        <ScrollTop />
    </div>
  )
}