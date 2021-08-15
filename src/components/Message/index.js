import React from 'react';
import './index.css';

export const Message = ({ author, text }) => {
    return (
        <div className="message">
            {author}: {text}
        </div>
    );
};