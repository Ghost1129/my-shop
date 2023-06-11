
import {BsSearch} from 'react-icons/bs'
import '../scss/components/_search.sass'
import TrendContainer from './TrendContainer'
import { useState } from 'react'

interface Props {
    size: string
}

const Search = (props:Props) => {
    const [show, setShow] = useState(false)
  return (
    <>
        <div className={`Search_Container1 ${props.size}`} onFocus={()=>setShow(true)} onBlur={()=>setShow(false)}>
            <input type="text" placeholder='Search' />
            <span><BsSearch size={28} /></span>
        </div>
        {
            show && <TrendContainer />
        }
        
        
    </>
  )
}

export default Search