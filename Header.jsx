import React from 'react'
import capwell from './images/capwell logo.png'
import './App.css'
import Navbar from './Navbar'



const Header = () => {
  return (
    <>
    <header>
      <img src={capwell} alt="capwell logo" />
      <div style={{FontSize:"80px"}} className='contacts'>
        <h3>Give Us a Call</h3>
        <p>+245 746628198<br/>
        +245 746628198<br/>
        +245 746628198<br/>
        +245 746628198<br/>
        </p>
      </div>
        <p className='email'>
          Drop Us a Line<br/>
          admin@capwell.co.ke<br/>
          sales@capwell.co.ke<br/>
        </p>
        <p>
        Location<br/>
        Get Directions
        </p>
        <div className='button1'>
          <button className='button'>
            Become a Distributor
          </button>
        </div>
    </header>
    <Navbar/>
        </>
  )
}

export default Header