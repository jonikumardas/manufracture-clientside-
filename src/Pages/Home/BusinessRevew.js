import React from 'react';

const BusinessRevew = ({ busines }) => {
    const { name, profit, image } = busines;
    console.log(image)
    return (
        <div>
            <div class="card shadow-xl" style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }}>
                <div class="card-body card-center">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <h2 class="card-title text-lime-500 font-bold " >{name}</h2>
                    <p class="card-title text-amber-500 font-bold ">{profit}</p>
                </div>
            </div>

        </div>
    );
};

export default BusinessRevew;