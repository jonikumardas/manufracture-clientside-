import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [secvices, setServices] = useState([]);
    useEffect(() => {
        fetch('https://ancient-scrubland-61244.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [secvices, setServices];
};

export default Hooks;