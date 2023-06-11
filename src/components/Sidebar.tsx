import React from 'react'
import Accordian from './Accordian'
import '../scss/components/_sidebar.sass'

interface SidebarProps {
  min: React.Dispatch<React.SetStateAction<number>>;
  max: React.Dispatch<React.SetStateAction<number>>;
  rate: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = ({min,max,rate}:SidebarProps) => {
  return (
    <aside className='Sidebar_Container'>
        <div>
          <h3>Search Results</h3>
          <Accordian min={min} max={max} rate={rate} type="brand"  />
          <Accordian min={min} max={max} rate={rate} type="price" />
          <Accordian min={min} max={max} rate={rate} type="rating" />


        </div>
    </aside>
  )
}

export default Sidebar