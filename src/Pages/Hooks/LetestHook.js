import React, { useEffect, useState } from 'react';

const LetestHook = () => {
    const [Newprodts, setNewprods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newproduct')
            .then(res => res.json())
            .then(data => setNewprods(data))
    })
    return [Newprodts]
};

export default LetestHook;