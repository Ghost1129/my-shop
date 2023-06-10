import React from 'react'
import '../scss/components/_search.sass'
import { faker } from '@faker-js/faker';

const TrendImage = () => {
  return (
    <div className='Trends_Data'>
        <div className='Trends_Data_Img'>
            <img src={faker.image.urlLoremFlickr({ category: 'clothes' })}alt="im" />
        </div>
                        
        <div className='Trends_Data_Text'>{faker.commerce.productName()}</div>
    </div>
  )
}

export default TrendImage