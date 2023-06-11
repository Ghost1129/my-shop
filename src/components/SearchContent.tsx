import { useEffect, useState } from 'react'
import '../scss/components/_searchcontent.sass'
import usefetchData from '../utils/usefetchData'
import Product from './Product'

interface SearchContentProps {
  min: number;
  max: number;
  rate: number;
}

const SearchContent = ({min,max,rate}:SearchContentProps) => {
  
  const [data] = useState(usefetchData())
  const [filteredData, setFilteredData] = useState(data)
  
  
  useEffect(() => {
    setFilteredData(data.filter((item) => item.price <= max && item.price >= min && item.rating >= rate))
  }, [data, min, max, rate])
 
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