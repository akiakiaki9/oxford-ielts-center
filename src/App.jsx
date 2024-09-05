import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contacts from './pages/Contacts'
import Gallery from './pages/Gallery'
import News from './pages/News'
import TeachersDetail from './components/TeachersDetail'
import Teacher from './pages/Teacher'
import LoadPage from './components/LoadPage'
import ScrollTop from './components/ScrollTop'
import NewsDetail from './components/NewsDetail'

export default function App() {
    return (
        <BrowserRouter>
        <LoadPage />
        <ScrollTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/teachers' element={<Teacher />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/news' element={<News />} />
                <Route path='/news/:id' element={<NewsDetail />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/teachers/:id' element={<TeachersDetail />} />
            </Routes>
        </BrowserRouter>
    )
}