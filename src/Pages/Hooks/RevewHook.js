import React, { useEffect, useState } from 'react';

const RevewHook = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://ancient-scrubland-61244.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [review])

    return [review];
};

export default RevewHook;