import React from 'react'
import WheatFarm from './images/wheatfarm.jpg'
import amaize1 from './images/amaize1.png'
import cil from './images/cil.png'
import pearl from './images/pearl.png'
import ranee1 from './images/ranee1.png'
import soko from './images/soko.png'
import yola from './images/yola.png'
import Treatos from './images/Treatos.png'
import rice1 from './images/capwell-rice.jpg'
import Cookies from './images/cookie.jpg'
import Flour from './images/flour.jpg'
import poridge from './images/capwell-poridge.jpg'
import Pasta from './images/pastas.jpg'
import Peas from './images/peas.jpg'
import Beverage from './images/beverage.jpg'
import Wheat from './images/wheat.jpg'
import Cards from './Cards'

const About = () => {
  return (
    <div>
        <div className='Aboutimage'>
            <img src={WheatFarm} alt="WheatFarm" />
            <h2 className='AboutTXT'><b>THE HOME <br/>OF<br/> WHOLESOME BRANDS</b></h2>
        </div>
        <div className='container'>
        <div className='container1'>
        <p className='pcap2'>Capwell Industries Limited was founded in 1999 with a milling factory in Thika. We have grown to diversify our product offering to over 30 different nutritious food products for you and your family.</p>
         <p className='pcap'>Anyone can tell you that their food is safe. This is why at Capwell Industries Limited, we are not just safe, <b>we are ISO 22000 compliant.</b> This means that we ensure our food safety processes meet the highest international standards, ensuring you get a wholesome, healthy meal every time you use our products.<br/>Our ISO 22000 certification is a symbol of our commitment and promises to continuously deliver safer and quality products.</p>
        </div>
            <div className='Aimg'>
                <img src={amaize1} alt="Amaize" />
                <img src={cil} alt="CIL" />
                <img src={pearl} alt="Pearl" />
                <img src={ranee1} alt="Ranee" />
                <img src={soko} alt="Soko" />
                <img src={yola} alt="Yola" />
                <img src={Treatos} alt="Treatos" />
            </div>
        </div>
        <div>
            <Cards/>
        </div>
        <div className='img1'>
            <div>
                <h1>
                    VIEW OUR 
                </h1>
                <h2>PRODUCT <br/>VALUE</h2>
            </div>
        <div className='photos10'>
        <img src={rice1} alt="Rice1"/>
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>

        <div className='photos10'>
        <img src={poridge} alt="poridge" />
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>

        <div className='photos10'>
        <img src={Cookies} alt="Cookies" />
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>

        <div className='photos10'>
        <img src={Pasta} alt="pasta" />
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>

        <div className='photos10'>
        <img src={Flour} alt="Flour" />
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>

        <div className='photos10'>
        <img src={Peas} alt="Peas" />
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>

        <div className='photos10'>
        <img src={Wheat} alt="Wheat" />
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>

        <div className='photos10'>
        <img src={Beverage} alt="Beverage" />
        <button className='btn'>
            <p>RICE</p>
        </button>
        </div>
        </div>

    </div>
  
  )
}

export default About