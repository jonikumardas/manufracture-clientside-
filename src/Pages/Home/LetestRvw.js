import React from 'react';
import img from '../../assats/goust.png'
const LetestRvw = ({ revews }) => {
    const { name, textarea, revew, image } = revews;
    return (
        <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }} className="card shadow-xl">
            <div class="avatar mx-auto p-2">
                <div class="w-24 rounded-full">
                    {
                        revews.image ? <img src={image} alt='' />
                            : <img src={img} alt=''></img>

                    }

                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{textarea}</p>
                <h1> Review:{revew} star</h1>
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