import React, { useEffect, useState } from 'react'

import '../scss/components/_searchcontent.sass'
import Star from './Star'
import img1 from '../assets/t1.jpeg'

import usefetchData from '../utils/usefetchData'
import Product from './Product'


const SearchContent = () => {
  
  const [data, setData] = useState(usefetchData())
  const [filteredData, setFilteredData] = useState(data)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10000)
  const [minrating, setminRating] = useState(5)
  
  useEffect(() => {
    setFilteredData(data.filter((item) => item.price <= max && item.price >= min && item.rating >= minrating))
  }, [data, min, max, minrating])
 
  return (
    <main className='Content_container'>
      <div className='Content_Inner'>
        {
          filteredData.map((item) => (
            <Product item={item} />
          ))
        } 
      </div>
    </main>
  )
}

export default SearchContent