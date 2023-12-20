import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Terms = () => {
  return (
  <>
    <h1>Terms and Conditions</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe vel aperiam pariatur laboriosam nam quod error, esse unde officia.</p>
    <form >
      <div>
      <div>
      <input  className='input' type="text" placeholder='Search...'/>
      <FontAwesomeIcon className='search' icon="fa-solid fa-magnifying-glass" />
      {/* <input/> */}
      </div>
      </div>
    </form>
 </>
  )
}

export default Terms