import { useLayoutEffect, useRef } from 'react'
import '../scss/pages/_home.sass'
import Search from './Search'
import { gsap } from 'gsap'


const Home = () => {
  const Container = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
      gsap.set(Container.current, {transformOrigin: 'top', scale: 0})
      const tl = gsap.timeline({defaults: {duration: 2, ease: 'power3.inOut'}})
      tl.fromTo(Container.current, {scale: 0}, {scale: 1})
      tl.fromTo(".Search", {opacity: 0}, {opacity: 1})
    }, Container)

    return () => {
      ctx.revert()
    }
  }, [])




  return (

    <div ref ={Container} className='Home_Container'>
        <div className='Search'>
        <Search size='' />
        </div>
    </div>
  )
}

export default Home