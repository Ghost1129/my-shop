import React, { useLayoutEffect } from 'react'
import Accordian from './Accordian'
import '../scss/components/_sidebar.sass'
import { gsap } from 'gsap'

interface SidebarProps {
  min: React.Dispatch<React.SetStateAction<number>>;
  max: React.Dispatch<React.SetStateAction<number>>;
  rate: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = ({min,max,rate}:SidebarProps) => {
  const Container = React.useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({defaults: {duration: 2, ease: 'power3.inOut'}})
      tl.fromTo(Container.current, {opacity: 0}, {opacity: 1 ,stagger: 0.5})
    }, Container)

    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <aside  className='Sidebar_Container'>
        <div ref={Container}>
          <h3>Search Results</h3>
          <Accordian min={min} max={max} rate={rate} type="brand"  />
          <Accordian min={min} max={max} rate={rate} type="price" />
          <Accordian min={min} max={max} rate={rate} type="rating" />


        </div>
    </aside>
  )
}

export default Sidebar