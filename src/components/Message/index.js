import React from 'react';
import './index.css';

export const Message = ({ text }) => {
    return (
        <div className="message">
            {text}
        </div>
    );
};