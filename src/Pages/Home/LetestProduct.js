import React, { useEffect, useState } from 'react';
import LetestHook from '../Hooks/LetestHook';
import LetestModal from './LetestModal';
import Letestp from './Letestp';

const LetestProduct = () => {
    const [Newprodts] = LetestHook()

    const [order, setOrder] = useState(null);
    return (
        <div>
            <h1 className='text-4xl p-4 text-center text-amber-500'>Our <span className='text-green-600'>Letest</span> product</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    Newprodts.map(pdts => <Letestp key={pdts._id}
                        pdts={pdts}
                        setOrder={setOrder}
                    ></Letestp>)
                }
            </div>
            {
                order && <LetestModal
                    order={order}
                    setOrder={setOrder}

                ></LetestModal>
            }

        </div>
    );
};

export default LetestProduct;