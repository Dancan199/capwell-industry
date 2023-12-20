import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const closeMobileMenu = () => setClick(false)
  return ( 
      <nav className='links'>
      
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT US</Link>
          <Link to='/ourbrand' onClick={closeMobileMenu}>Our Brand
          <FontAwesomeIcon icon="fa-solid fa-caret-down" bounce /></Link>
          <Link to='/forbusiness'>FOR BUSINESS/PARTNERS</Link>
          <Link to='/careers'>CAREERS</Link>
          <Link to='/media'>MEDIA</Link>
          <Link to='/contactus'>CONTACT US</Link>
        </nav>
  )
}

export default Navbar