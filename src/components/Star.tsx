import React from 'react'
import '../scss/components/_star.sass'

interface StarProps {
  rating: number;
}

const Star = (props:StarProps) => {
  return (
    <div className='Star_container'>
    {[...Array(5)].map((_, i) => (
                     i < props.rating ?
                    //  i < 3 ?
                     (
                        <svg key={i} className='star' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' d='M10 2a1 1 0 01.894.553l2.447 4.895 5.21.764a1 1 0 01.553 1.789l-3.74 3.67.88 5.2a1 1 0 01-1.447 1.105L10 16.334l-4.553 2.388a1 1 0 01-1.447-1.105l.88-5.2-3.74-3.67a1 1 0 01.553-1.789l5.21-.764L9.106 2.553A1 1 0 0110 2z' clipRule='evenodd' />
                        </svg>
                     ):(
                        <svg key={i} className='star--empty' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' d='M10 2a1 1 0 01.894.553l2.447 4.895 5.21.764a1 1 0 01.553 1.789l-3.74 3.67.88 5.2a1 1 0 01-1.447 1.105L10 16.334l-4.553 2.388a1 1 0 01-1.447-1.105l.88-5.2-3.74-3.67a1 1 0 01.553-1.789l5.21-.764L9.106 2.553A1 1 0 0110 2z' clipRule='evenodd' />
                        </svg>
                     )
                    ))}</div>
  )
}

export default Star