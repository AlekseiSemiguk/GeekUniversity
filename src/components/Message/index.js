import React from 'react';
import './index.css';

export const Message = ({ content, author }) => {
    return (
        <div className="message">
            {author}: {content}
        </div>
    );
};
