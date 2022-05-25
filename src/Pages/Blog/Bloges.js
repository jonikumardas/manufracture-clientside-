import React from 'react';

const Bloges = ({ blog }) => {
    const { title, description } = blog;
    return (
        <div class="card lg:w-96 text-primary-content shadow-lg">
            <div class="card-body">
                <h2 class="card-title text-success text-center">{title}</h2>
                <p>{description}</p>
            </div>
        </div>


    );
};

export default Bloges;