import '../scss/components/_accordian.sass'
import { RxCaretDown } from 'react-icons/rx'
import Star from './Star';
import React, { useState } from 'react';


interface Option {
  name: string;
  value: string ;
}

interface BrandProps {
  name: string;
  options: Option[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
  }

  interface AccordianProps {
    type: string
  }

  interface StarProps {
    count: number[];
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<any>>;
  }
  interface Data {
    brand: {
      name: string;
      options: {
        name: string;
        value: string;
      }[];
    };
    price: {
      name: string;
      options: {
        name: string;
        value: string;
      }[];
    };
  }





const Brand = ({name,options,open,setOpen}:BrandProps) => 
{
  return(
    <>
<div onClick={()=>setOpen(!open)} className="Accordian_header">
        <span>{name}</span>
        <RxCaretDown size={18} />
  </div>
      {
        open &&
        <div className="Accordian_body">
          <ul>
            {options.map((option, i) => (
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">{option.name}</label>
              </li>
            ))
          }
          </ul>
        </div>
      }

</>
  )
}

const Stars= ({count,open,setOpen}:StarProps) =>{

  return(
    <>
    <div onClick={()=>setOpen(!open)} className="Accordian_header">
            <span>Rating</span>
            <RxCaretDown size={18} />
      </div>
          {
            open && <div className="Accordian_body">
            <ul>
              {
                count.map((option, i) => (
                  <li key={i}>
                    <input type="checkbox" name="" id="" />
                    <Star rating={option} />
                  </li>
                ))
              }
            </ul>
          </div>

          }
  </>
  )
}



const Accordian = ({type}:AccordianProps) => {
  const [open, setOpen] = useState(true)
  const data ={
    "brand":{
      name: 'Brand',
      options: [
      {
        name: 'Mango',
        value: 'mango'
      },
      {
        name: 'H&M',
        value: 'hnm'
      }
    ]
    },
    "price":{
      name: 'Price Range',
      options: [
        {
          name: 'Under 500',
          value: '500'
        },
        {
          name: '500 - 1000',
          value: '1000'
        }
      ]
    },
    "rating":{
      name: 'Ratings',
    }
  }
  const rating = [5,4,3,2,1]

  return (
    <div className='Accordian'>
           {
              data[type as keyof Data].name === 'Ratings' ? <Stars setOpen={setOpen} open={open} count={rating} /> : <Brand setOpen={setOpen} open={open} name={data[type as keyof Data].name} options={data[type as keyof Data].options} />
           }
      </div>
  )
}

export default Accordian