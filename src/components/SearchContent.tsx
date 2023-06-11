import React from 'react'
import ProductList from '../utils/data'
import '../scss/components/_searchcontent.sass'
import Star from './Star'

const SearchContent = () => {
  return (
    <main className='Content_container'>
      <div className='Content_Inner'>
        <div className='product_container'>
          <img src="" alt="" />
          <div className='product_details'>
            <h3>Product Name</h3>
            <div className='product_price'>
            <span className="product_price">$20.00</span>
            <span className="product_discount">$15.00</span>
            </div>
            <div className='product_rating'>
              <Star rating={5} />
              <span>(210)</span>
            </div>
          </div>
        </div>
        

      </div>
    </main>
  )
}

export default SearchContent