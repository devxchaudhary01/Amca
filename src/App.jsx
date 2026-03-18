import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './AboutComponents/About'
import HeroSection from './components/Hero'
import Update from './Updates/Update'
import AhuBlog from './Updates/AhuBlog'
import ResearchBlog from './Updates/Research'
import Gallery from './gallery/First'
import EnquiryForm from './contactUs/Enquiry'
import Fans from './products/Fan'
import FanDetails from './products/FanDetail'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/updates' element={<Update />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/ahu-blog' element={<AhuBlog />} />
          <Route path='/research-blog' element={<ResearchBlog />} />
          <Route path='/contact-us' element={<EnquiryForm />} />
          <Route path='/products' element={<Fans />} />
          <Route path='/fan/:id' element={<FanDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
