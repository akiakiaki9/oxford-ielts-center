import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Title from '../components/Title'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import ScrollTop from '../components/ScrollTop'

export default function News() {
  return (
    <div>
        <Navbar1 />
        <Navbar2 />
        <Title />
        <div className='news'>
          <div className="news-blok">
            <div className="news-blok__container">
              {/* {NEWS.map(news => (
                <div key={news.id}>
                  {news.title}
                </div>
              ))} */}
              <h1 style={{height: '50vh'}}>No news yet</h1>
            </div>
          </div>
        </div>
        <Footer1 />
        <Footer2 />
        <ScrollTop />
    </div>
  )
}