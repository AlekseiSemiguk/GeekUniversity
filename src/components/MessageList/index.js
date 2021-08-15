import React from 'react';
import { Message } from "../Message";
import './index.css';

export const MessageList = ({ messageList }) => {
    return (
        <ul className="message-list">
            {
                messageList.map(({ author, text }, index) =>
                    <li key={index} >
                        <Message author={author} text={text} />
                    </li>
                )
            }
        </ul>
    );
};