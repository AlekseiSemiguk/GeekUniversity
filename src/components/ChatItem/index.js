import React from 'react';
import { string } from 'prop-types';

export const ChatItem = ({ name, id }) => {
    return (
        <div>
            {name} ID:{id}
        </div>
    );
};

ChatItem.propTypes = {
    name: string.isRequired,
}