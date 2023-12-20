import React, {useState} from 'react'
import { Menu } from './menu'
import './App.css'
import { Link } from 'react-router-dom'


const Dropdown = () => {
    const [click,setClick] = useState(false)
    const handleClick=()=>setClick(!click)
  return (
    <div></div>
  )
}

export default Dropdown