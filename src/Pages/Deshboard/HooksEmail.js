import React, { useEffect, useState } from 'react';

const HooksEmail = () => {
    const [clientEmil, setClientEmil] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/email')
            .then(res => res.json())
            .then(data => setClientEmil(data))
    }, [])
    return [clientEmil]
};

export default HooksEmail;