import React from 'react'
import '../scss/pages/_home.sass'
import Search from './Search'


const Home = () => {
  return (
    <div className='Home_Container'>
      <span className='Logo'>zevi</span>
        <Search />
    </div>
  )
}

export default Home