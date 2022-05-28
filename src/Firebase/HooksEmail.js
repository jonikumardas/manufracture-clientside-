import React, { useEffect, useState } from 'react';

const HooksEmail = () => {
    const [clientEmil, setClientEmil] = useState('');
    useEffect(() => {
        fetch('https://ancient-scrubland-61244.herokuapp.com/email')
            .then(res => res.json())
            .then(data => setClientEmil(data))
    }, [])
    return [clientEmil, setClientEmil];
};

export default HooksEmail;