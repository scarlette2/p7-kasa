import React from 'react';
import { useState } from 'react';

const Collapse = ({ content, title }) => {
    const [active, setActive] = useState(false)
    const handleToggle = e => {
        setActive(!active)
    }
    return (
        <div id='flex-collapse' className={`accordion ${active && "active"}`}>
            <div className='collapse-title' onClick={handleToggle}>{title} <span className='collapse-icon'></span></div>
            <div className='collapse-content'>{content}</div>
        </div>
    );
};

export default Collapse;