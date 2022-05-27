import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [secvices, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [secvices, setServices];
};

export default Hooks;