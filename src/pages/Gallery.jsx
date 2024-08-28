import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Title from '../components/Title'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import ScrollTop from '../components/ScrollTop'
import GalleryArt from '../components/GalleryArt'

export default function Gallery() {
  return (
    <div>
        <Navbar1 />
        <Navbar2 />
        <Title />
        <GalleryArt />
        <Footer1 />
        <Footer2 />
        <ScrollTop />
    </div>
  )
}
