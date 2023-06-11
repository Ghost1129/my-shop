
import {BsSearch} from 'react-icons/bs'
import '../scss/components/_search.sass'
import TrendContainer from './TrendContainer'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'


interface Props {
    size: string
}

const Search = (props:Props) => {
    const [show, setShow] = useState(false)
    const handleSubmit = () => {
        <Navigate to='/store' />
       
    }
    const handleHide = () => {
        setTimeout(() => {
            setShow(false)
        }, 1000)
    }
  return (
    <>
        <div className={`Search_Container1 ${props.size}`} onFocus={()=>setShow(true)} onBlur={()=>handleHide()} >
            <input type="text" placeholder='Search' onSubmit={()=>handleSubmit()} />
            <span><BsSearch size={28} /></span>
        </div>
        {
            show && <TrendContainer />
        }
        
        
    </>
  )
}

export default Search