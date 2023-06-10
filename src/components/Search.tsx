import React from 'react'
import {BsSearch} from 'react-icons/bs'
import '../scss/components/_search.sass'
import TrendContainer from './TrendContainer'


const Search = () => {
  return (
    <>
        <div className='Search_Container1'>
            <input type="text" placeholder='Search' />
            <span><BsSearch size={30} /></span>
        </div>
        <TrendContainer />
        
    </>
  )
}

export default Search