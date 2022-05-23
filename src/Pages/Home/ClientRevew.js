import React from 'react';

const ClientRevew = ({ revew }) => {
    const { name, about, image } = revew;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="avatar mx-auto">
                    <div className="w-24  rounded-full">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{about}</p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClientRevew;