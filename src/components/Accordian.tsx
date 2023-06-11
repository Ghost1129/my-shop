import '../scss/components/_accordian.sass'
import { RxCaretDown } from 'react-icons/rx'
import Star from './Star';
import React, { useState } from 'react';


interface Option {
  name: string;
  value: number ;
}

interface BrandProps {
  name: string;
  options: Option[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
  min?: React.Dispatch<React.SetStateAction<number>>;
  max?: React.Dispatch<React.SetStateAction<number>>;
  }

interface AccordianProps {
    type: string
    min?: React.Dispatch<React.SetStateAction<number>>;
    max?: React.Dispatch<React.SetStateAction<number>>;
    rate?: React.Dispatch<React.SetStateAction<number>>;
  }

interface StarProps {
    count: number[];
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<any>>;
    rate?: React.Dispatch<React.SetStateAction<number>>;
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
        value: number
      }[];
    };
  }

// Brand And Price component
const Brand = ({name,options,min,max,open,setOpen}:BrandProps) => {
  const [checked, setChecked] = useState(-1)
  const handleClicked = (option: number) => {
    if (checked === option) {
      setChecked(-1)
      min!(0)
      max!(10000)
      return
    }
    setChecked(option)
    if(option<501){
      min!(option)
    }
    else{
      min!(500)
      max!(option)
    }
  }
  return(
    <>
<div onClick={()=>setOpen(!open)} className="Accordian_header">
        <span>{name}</span>
        <RxCaretDown size={18} />
  </div>
      {
        open &&
        <div className="Accordian_body">
          {
            // if type is brand then show checkbox else show radio button
            name === 'Brand' ?<>
            <ul>
            {options.map((option, i) => (
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">{option.name}</label>
              </li>
            ))
          }
          </ul>
            </>:<>
            <ul>
            {options.map((option, i) => (
              <li>
                <input checked={checked === option.value}
                  onChange={() => handleClicked(option.value)}
                 type="checkbox" name="" id="" />
                <label htmlFor="">{option.name}</label>
              </li>
            ))
          }
          </ul>
            </>
          }
        </div>
      }

</>
  )
}

// Stars component
const Stars= ({count,open,rate,setOpen}:StarProps) =>{
  const [checked, setChecked] = useState(-1)
  const handleClicked = (option: number) => {
    if (checked === option) {
      setChecked(-1)
      return
    }
    setChecked(option)
    rate!(option)
  }
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
                    <input type="checkbox"
                      value={option}
                      checked={checked === option}
                      onChange={() => handleClicked(option)}
                     name="" id="" />
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


const Accordian = ({min,max,rate,type}:AccordianProps) => {
  const [open, setOpen] = useState(true)
  const data ={
    "brand":{
      name: 'Brand',
      options: [
      {
        name: 'Mango',
        value: 1
      },
      {
        name: 'H&M',
        value: 2
      }
    ]
    },
    "price":{
      name: 'Price Range',
      options: [
        {
          name: 'Under 500',
          value: 500
        },
        {
          name: '500 - 1000',
          value: 1000
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
            // if type is rating then show stars else show brand and price
              data[type as keyof Data].name === 'Ratings' ? <Stars rate={rate} setOpen={setOpen} open={open} count={rating} /> : <Brand min={min} max={max} setOpen={setOpen} open={open} name={data[type as keyof Data].name} options={data[type as keyof Data].options} />
           }
      </div>
  )
}

export default Accordian