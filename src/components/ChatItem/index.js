import React from 'react';
import { string } from 'prop-types';

export const ChatItem = ({ name }) => {
    return (
        <div>
            {name}
        </div>
    );
};

ChatItem.propTypes = {
    name: string.isRequired,
}