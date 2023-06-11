import React from 'react'
import Search from './Search'
import '../scss/components/_navbar.sass'

const Navbar = () => {
  return (
    <nav className='nav_container'>
        <div className='nav_wrapper'>
          <Search size='searchpage' />
          
        </div>
      </nav>
  )
}

export default Navbar