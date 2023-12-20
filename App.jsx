import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import Terms from './Terms'
import Home from './Home'
import OurBrand from './OurBrand'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const App = () => {
  return (
    <Router>
    <Header/> 
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Terms' element={<Terms/>}/>
    <Route path='/OurBrand' element={<OurBrand/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App
      