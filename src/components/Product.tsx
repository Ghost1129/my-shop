import React, { useLayoutEffect, useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import Star from './Star'
import { gsap } from 'gsap'

interface ProductProps {
    item: {
        id: string;
        name: string;
        price: number;
        image: string;
        rating: number;
    }
}

const Product = ({item}:ProductProps) => {
    const [like, setLike] = useState(false)
    const Image = React.useRef<HTMLImageElement>(null)
    useLayoutEffect(() => {
      const ctx = gsap.context(()=>{
        const tl = gsap.timeline({defaults: {duration: 2 ,delay:1 , ease: 'power3.inOut'}})
        tl.fromTo(Image.current, {opacity: 0}, {opacity: 1 ,stagger: 0.5})
      }, Image)
      return () => {
        ctx.revert()
      }
    }, [item])

  return (
    <div key={item.id} ref={Image} className='product_container'>
          
              <div className='product_image'>
              {like?<>
                <AiFillHeart onClick={()=>setLike(!like)}  className='product_like red' size={30} />
                </>:<>
                <AiOutlineHeart onClick={()=>setLike(!like)}  className='product_like' size={30} /></>}
                  <img src={item.image} alt="imag" />
                  <div className='product_hover'>View Product</div>
              </div>
              <div className='product_details'>
                  <h3>{item.name}</h3>
                  <div className='product_cost'>
                  <span className="product_price">Rs.{item.price+100}</span>
                  <span className="product_discount">Rs.{item.price}</span>
                  </div>
                  <div className='product_rating'>
                    <Star rating={item.rating} />
                    <span>(210)</span>
                </div>
              </div>
          </div> 
  )
}

export default Product