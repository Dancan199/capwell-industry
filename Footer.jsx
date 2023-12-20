import React from 'react'
import './App.css'
import capwell from './images/capwell logo.png'
import location from './images/location.png'
import EMAIL from './images/EMAIL.jpg'
import CALL from './images/image call.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
<footer>
<img src={capwell} alt="capwell logo" />
<p className='capwell'>Capwell Industries Limited started its operations in 1999 with a maize milling factory in Thika. We manufacture high quality maize flour, pulses, rice, porridge and wheat flour using the best processes and modern technology available.</p>
<div className='contact-us'>
    <h3>Contact Us</h3>
    <p>Off Garissa Road,Behind Gretsa University,Makongeni,Thika</p>
    <h3>Telephone:<br/></h3>
        <p className='p1'>+245 746628198</p>
       <p className='p1'> +245 746628198</p>
        <p className='p1'>+245 746628198</p>
        <p className='p1'>+245 746628198</p>
        <h3>Email:</h3>
        <p className='p1'>admin@capwell.co.ke</p>
        <p className='p1'>sales@capwell.co.ke</p>
    </div>
    <div className='quicklinks'>
            <h3>Quick Links</h3>
            <Link to='/Terms'>Terms</Link><br/>
            <a href="/">Human Resource Statements</a><br/>
            <a href="/">Quick Statement</a><br/>
            <a href="/">For Business</a><br/>
        </div>
</footer>
<nav className='linkf'>
          <p className='p2'>© 2023 - Capwell Industries Limited - All Rights Reserved - <a className='p2' href="/">Terms $ Conditions</a></p>
          <div className='media'>
            <img src={location} alt="location"/>
            <img src={EMAIL} alt="EMAIL" />
            <img src={CALL} alt="CALL" />
          </div>
        </nav>
    </>
  )
}

export default Footer