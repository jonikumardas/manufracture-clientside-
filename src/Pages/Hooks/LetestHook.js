import React, { useEffect, useState } from 'react';

const LetestHook = () => {
    const [Newprodts, setNewprods] = useState([]);
    useEffect(() => {
        fetch('https://ancient-scrubland-61244.herokuapp.com/newproduct')
            .then(res => res.json())
            .then(data => setNewprods(data))
    })
    return [Newprodts]
};

export default LetestHook;