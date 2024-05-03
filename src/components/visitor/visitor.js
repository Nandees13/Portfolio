// VisitorCounter.js

import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Retrieve count from localStorage
        const storedCount = localStorage.getItem('visitorCount');
        if (storedCount) {
            setCount(parseInt(storedCount));
        } else {
            setCount(0);
        }

        // Increment count and update localStorage
        setCount(prevCount => {
            const newCount = prevCount + 1;
            localStorage.setItem('visitorCount', newCount);
            return newCount;
        });
    }, []);

    return (
<div style={{display:'flex',alignItems: 'center',justifyContent:'center'}}>
            <p>This page has been visited {count} times.</p>
        </div>
    );
};

export default VisitorCounter;
