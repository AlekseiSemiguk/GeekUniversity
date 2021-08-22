import React from 'react';
import { Message } from "../Message";
import './index.css';
import { shape, string, arrayOf, number } from 'prop-types';

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
    id: number.isRequired,
    author: string.isRequired,
    text: string.isRequired,
})

MessageList.propTypes = {
    messageList: arrayOf(MessagePropTypes),
}

