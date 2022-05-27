import React from 'react';
import RevewHook from '../Hooks/RevewHook';
import LetestRvw from './LetestRvw';

const NewstReview = () => {
    const [review] = RevewHook();
    console.log(review);
    return (
        <div className='my-12'>
            <h1 className='text-4xl text-amber-500 py-5 text-center'> Letest review </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    review.map(revews => <LetestRvw key={revews._id}
                        revews={revews}></LetestRvw>)
                }

            </div>
        </div>
    );
};

export default NewstReview;