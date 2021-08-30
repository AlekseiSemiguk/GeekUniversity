import React from 'react';
import './index.css';
import { string } from 'prop-types';

export const Message = ({ author, text }) => {
    return (
        <div className="message">
            {author}: {text}
        </div>
    );
};

Message.propTypes = {
    author: string.isRequired,
    text: string.isRequired,
}
