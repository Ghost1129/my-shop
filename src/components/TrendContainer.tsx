import React from 'react'
import TrendImage from './TrendImage'
import '../scss/components/_search.sass'
import { faker } from '@faker-js/faker';

const TrendContainer = () => {
  return (
    <div className='Content_Container'>
            <div className='Content_Inner'>
                <h3>
                    Latest Trends
                </h3>
                <div className='Content_Trends'>
                    <TrendImage/>
                    <TrendImage/>
                    <TrendImage/>
                    <TrendImage/>
                    <TrendImage/>
                </div>
                <div className='Content_Suggestions'>
                    <h3>Popular suggestions</h3>
                    <ul>
                        {
                            [...Array(5)].map((index) => (
                                <li key={index}>{faker.commerce.productName()}</li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default TrendContainer