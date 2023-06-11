import React, { useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import Star from './Star'

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
  return (
    <div key={item.id} className='product_container'>
          
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