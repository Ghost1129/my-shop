import '../scss/components/_accordian.sass'
import { RxCaretDown } from 'react-icons/rx'


interface Option {
  name: string;
  value: string;
}

interface BrandProps {
  name: string;
  options: Option[];
  }

  interface AccordianProps {
    type: string
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
    rating: {
      name: string;
      options: number[];
    };
  }





const Brand = (prop:BrandProps) => 
<>
<div className="Accordian_header">
        <span>{prop.name}</span>
        <RxCaretDown size={18} />
  </div>
      <div className="Accordian_body">
        <ul>
          <li>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Apple</label>
          </li>
        </ul>
  </div>

</>

const Stars= () =>
  <>
    <div className="Accordian_header">
            <span>Rating</span>
            <RxCaretDown size={18} />
      </div>
          <div className="Accordian_body">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Apple</label>
              </li>
            </ul>
      </div>
  
  </>



const Accordian = (props:AccordianProps) => {
  const {type} = props
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
      options: [
        {
          name: '5',
          value: '5'
        },
        {
          name: '4',
          value: '4'
        },
        {
          name: '3',
          value: '3'
        },
        {
          name: '2',
          value: '2'
        },{
          name: '1',
          value: '1'
        }
      ]
    }
  }


  return (
    <div className='Accordian'>
           {
              data[type as keyof Data].name === 'Rating' ? <Stars  /> : <Brand name={data[type as keyof Data].name} options={data[type as keyof Data].options} />
           }
      </div>
  )
}

export default Accordian