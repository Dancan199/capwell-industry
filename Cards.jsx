import React from 'react'
import Purpose from './images/Purpose-1.png'
import Vision from './images/Vision-1.png'
import Mission from './images/Mission-1.png'
import Values from './images/Values.png'
import './App.css'

const Cards = () => {
  return (
    <div className='cards'>
        <h1 className='exist'> WHY WE EXIST</h1>
    <div className='Card-container'>
        <div className='image-container'>
            <div className='card1'>
            <h1>1</h1>
            </div>
            <img src={Purpose} alt="Purpose" />
        </div>
        <div className='card-title'>
            <h2 className='cardp'>PURPOSE</h2>
        </div>
        <div className="card-body">
            <p className='cardp'>Enriching lives through nutrition</p>
        </div>
    </div>
    <div className='Card-container'>
        <div className='image-container'>
        <div className='card1'>
            <h1>2</h1>
            </div>
            <img src={Vision} alt="Purpose" />
        </div>
        <div className='card-title'>
            <h2 className='cardp'>Vision</h2>
        </div>
        <div className="card-body">
            <p className='cardp'>Bring Fulfilment to our consumers by providing nutritious, safe and convenient foods.</p>
        </div>
    </div>
    <div className='Card-container'>
        <div className='image-container'>
        <div className='card1'>
            <h1>3</h1>
            </div>
            <img src={Mission} alt="Purpose" />
        </div>
        <div className='card-title'>
            <h2 className='cardp'>Mission</h2>
        </div>
        <div className="card-body">
            <p className='cardp'>To be a sustainable business by innovatively transforming farm produce into nutritious, safe and convenient vegetarian foods.</p>
        </div>
    </div>
    <div className='Card-container'>
        <div className='image-container'>
        <div className='card1'>
            <h1>4</h1>
            </div>
            <img src={Values} alt="Purpose" />
        </div>
        <div className='card-title'>
            <h2 className='cardp'>Values</h2>
        </div>
        <div className="card-body">
            <p className='cardp'>Integrity<br/>Passion<br/>Innovation<br/>Agility<br/>Proactive<br/>Results Oriented</p>
        </div>
    </div>
    </div>
  )
}

export default Cards