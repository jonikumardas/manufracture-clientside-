import React from 'react';
import img1 from '../../assats/business/coustomar.png';
import img2 from '../../assats/business/flag.png';
import img3 from '../../assats/business/order.png';
import img4 from '../../assats/business/support.png';
import bg from "../../assats/bg.jpeg";
import BusinessRevew from './BusinessRevew';

const Business = () => {
    const business = [
        {
            id: 1,
            name: "Client Setisfaction",
            profit: "103k+ clints",
            image: `${img1}`,
        },

        {
            id: 2,
            name: "Business with",
            profit: "93+ Counteris support",
            image: `${img2}`,
        }
        ,
        {
            id: 3,
            name: "Complite Order ",
            profit: "103k clints",
            image: `${img3}`,
        }
        ,
        {
            id: 4,
            name: "Coustomar revew",
            profit: "50k+ clints",
            image: `${img4}`,
        }
    ]
    return (
        <div className='bg-blend-soft-light backdrop-blur-3xl' style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className="text-amber-500 text-4xl text-center p-4 font-bold"> Milloons of PePope Trust with Us  </h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    business.map(busines => <BusinessRevew key={busines.id}

                        busines={busines}></BusinessRevew>)
                }
            </div>

        </div>
    );
};

export default Business;