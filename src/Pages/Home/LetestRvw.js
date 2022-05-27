import React from 'react';
const LetestRvw = ({ revews }) => {
    const { name, textarea, revew, image } = revews;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={image} alt='' />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{textarea}</p>
                <h1> Review={revew}</h1>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>

        </div>
    );
};

export default LetestRvw;