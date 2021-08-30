import React from 'react';
import { Message } from "../Message";
import './index.css';
import { shape, string, arrayOf } from 'prop-types';

export const MessageList = ({ messageList }) => {
    return (
        <ul className="message-list">
            {
                messageList.map(({ author, text, id }) =>
                    <li key={id} >
                        <Message author={author} text={text} />
                    </li>
                )
            }
        </ul>
    );
};

const MessagePropTypes = shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
})

MessageList.propTypes = {
    messageList: arrayOf(MessagePropTypes),
}

