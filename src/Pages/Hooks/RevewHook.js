import React, { useEffect, useState } from 'react';

const RevewHook = () => {
    const [review, setReview] = useState([]);
    console.log(review);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [review])

    return [review];
};

export default RevewHook;