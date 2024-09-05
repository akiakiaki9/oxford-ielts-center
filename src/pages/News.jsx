import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Title from '../components/Title'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import ScrollTop from '../components/ScrollTop'
import { NEWS } from '../utils/news'
import { Link } from 'react-router-dom'

export default function News() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Title />
      <div className='news'>
        <div className="news-blok">
          <div className="news-blok__container">
            {NEWS.map(news => (
              <div key={news.id} className='new'>  
                  <div className="new-blok">
                    <div className="new-blok__container-1">
                      <img src={news.photo} alt="" />
                    </div>
                    <div className="new-blok__container-2">
                      <p className='new__date'>{news.date}</p>
                      <p className='new__title'>{news.title}</p>
                      <p className='new__subtitle'>{news.subtitle}</p>
                      <Link to={`/news/${news.id}`}>READ MORE</Link>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </div>
  )
}