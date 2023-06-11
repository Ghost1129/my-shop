import React from 'react'
import Accordian from './Accordian'
import '../scss/components/_sidebar.sass'

const Sidebar = () => {
  return (
    <aside className='Sidebar_Container'>
        <div>
          <h3>Search Results</h3>
          <Accordian type="brand"  />
          <Accordian type="price" />
          <Accordian type="rating" />


        </div>
    </aside>
  )
}

export default Sidebar