import React from 'react';

const Bloges = ({ blog }) => {
    const { title, description } = blog;
    return (
        <div className="card lg:w-96 text-primary-content shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-success text-center">{title}</h2>
                <p>{description}</p>
            </div>
        </div>


    );
};

export default Bloges;