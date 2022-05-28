import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const SingleService = ({ service, setOrder }) => {
    const { name, image, about, quantity, balance, company } = service;
    const [user] = useAuthState(auth)
    return (
        <div>
            <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }}>
                <figure><img className='w-64 mx-auto pt-5 rounded' src={image} style={{ img: "cover" }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-amber-500">
                        {name}
                    </h2>
                    <p>Description:</p>
                    <p>{about}</p>
                    <p className='text-amber-500'> Price :<span className='text-lime-600'> ${balance}</span></p>
                    <p className='text-amber-500'>Available Quantity :<span className='text-lime-600'>{quantity}</span> </p>
                    <p className='text-amber-500'>Company name :<span className='text-lime-600'>{company}</span> </p>
                    <div className="card-actions justify-end">

                        <label
                            htmlFor="ordermodal"
                            disabled={quantity === 0 || !user}
                            onClick={() => setOrder(service)}
                            className="btn btn-outline btn-success">Book Now
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;