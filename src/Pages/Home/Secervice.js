import React from 'react';

const Secervice = ({ secvice, setOrder }) => {
    const { name, image, balance, about, quantity } = secvice;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} style={{ img: "cover" }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-amber-500">
                        {name}
                    </h2>
                    <p>Description:</p>
                    <p>{about}</p>
                    <p className='text-amber-500'> Price :<span className='text-lime-600'> {balance}</span></p>
                    <p className='text-amber-500'>Available stooked Quantity :<span className='text-lime-600'>{quantity}</span> </p>
                    <div className="card-actions justify-end">
                        <label
                            for="ordermodal"
                            disabled={quantity === 0}
                            onClick={() => setOrder(secvice)}
                            class="btn btn-outline btn-success">Book Now
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secervice;