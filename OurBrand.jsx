import React from 'react'
import ALLBRANDS from './images/allproducts.jpg'
import './App.css'
import Soko from './images/soko.png'
import Soko1 from './images/Soko1.jpg'
import Ranee from './images/ranee1.png'
import Pearl from './images/pearl.png'
import Amaize from './images/amaize1.png'
import Treatos from './images/Treatos.png'
import amaize2 from './images/amaize2.jpg'
import cil2 from './images/cil2.jpg'
import pearl2 from './images/pearl2.jpg'
import ranee2 from './images/ranee.jpg'
import CIL from './images/cil.png'
// import CIL from './images/cil.png'


const OurBrand = () => {
  return (
    <div>
      <div className='brand1'>
        <img src={ALLBRANDS} alt="ALL BRANDS" />
        </div>
    <div className='brand'>
        <div className='brandcard'>
            <div className='brandcont'>
                <img className='soko' src={Soko} alt="soko" />
                <img  className='soko1' src={Soko1} alt="SOKO" />
            </div>
        </div>
        <div className='brandcard'>
            <div className='brandcont'>
                <img className='soko' src={Ranee} alt="RANEE" />
                <img  className='soko1' src={ranee2} alt="RANEE" />
            </div>
        </div>
        <div className='brandcard'>
            <div className='brandcont'>
                <img className='soko' src={Pearl} alt="PEARL" />
                <img  className='soko1' src={pearl2} alt="pearl" />
            </div>
        </div>
        <div className='brandcard'>
            <div className='brandcont'>
                <img className='soko' src={Amaize} alt="AMAIZE" />
                <img  className='soko1' src={amaize2} alt="AMAIZE" />
            </div>
        </div>
        <div className='brandcard'>
            <div className='brandcont'>
                <img className='soko2' src={Treatos} alt="TREATOS" />
                <img  className='soko1' src={Soko1} alt="SOKO" />
            </div>
        </div>
        <div className='brandcard'>
            <div className='brandcont'>
                <img className='soko' src={CIL} alt="CIL" />
                <img  className='soko1' src={cil2} alt="CIL" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default OurBrand