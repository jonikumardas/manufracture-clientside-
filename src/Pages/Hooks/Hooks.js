import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [secvices, setServices] = useState([]);
    useEffect(() => {
        fetch('Tools.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [secvices, setServices];
};

export default Hooks;