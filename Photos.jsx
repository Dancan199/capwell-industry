import React from 'react'
import rice1 from './images/capwell-rice.jpg'
import Cookies from './images/cookie.jpg'
import spagetti from './images/spagetti.jpg'
import Flour from './images/flour.jpg'
import poridge from './images/capwell-poridge.jpg'
import Pasta from './images/pastas.jpg'
import Peas from './images/peas.jpg'
import Beverage from './images/beverage.jpg'
import Wheat from './images/wheat.jpg'

const Photos = () => {
  return (
    <div className='photos'>
      <div className='photo2'>
        <div className='photos1'>
        <img className='blur' src={rice1} alt="Rice1"/>
        <div className='photo-content'>
          Rice
        </div>
        </div>
        <div className='photos1'>
        <img className='blur' src={poridge} alt="poridge" />
        <div className='photo-content'>
          poridge
        </div>
        </div>
        <div className='photos1'>
        <img className='blur' src={Cookies} alt="Cookies" />
        <div className='photo-content'>
          Cookies
        </div>
        </div>
        <div className='photos1'>
        <img className='blur' src={Flour} alt="Flour" />
        <div className='photo-content'>
          Flour
        </div>
        </div>
        <div className='photos1'>
        <img className='blur' src={Pasta} alt="pasta" />
        <div className='photo-content'>
          Pasta
        </div>
        </div>
        <div className='photos1'>
        <img className='blur' src={spagetti} alt="Spagetti" />
        <div className='photo-content'>
        spagetti
        </div>
        </div>
        <div className='photos1'>
        <img className='blur' src={Peas} alt="Peas" />
        <div className='photo-content'>
        Peas
        </div>
        </div>
        <div className='photos1'>
        <img className='blur' src={Wheat} alt="Wheat" />
        <div className='photo-content'>
        Wheat
        </div>
        </div><div className='photos1'>
        <img className='blur' src={Beverage} alt="Beverage" />
        <div className='photo-content'>
        Beverage
        </div>
        </div>
        </div>

        <div className='photo3'>
        <h2>The Home of Awesome Brands</h2>
        <p>There’s something special in the home when the scent of a small feast being prepared is wafting through the air</p>
        <p>At Capwell Industries Limited we pride ourselves on delivering this priceless experience. We are passionate about bringing you quality food using the latest state of the art technology and modern farming methods. It is this methodology that makes Capwell the home of healthy, wholesome brands.</p>
        </div>
    </div>
  )
}

export default Photos