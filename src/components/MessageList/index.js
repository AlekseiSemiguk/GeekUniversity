import React from 'react';
import { Message } from "../Message";
import './index.css';
import { messagesConnect } from "../../connects/messages";

export const MessageListRender = ({ messages }) => {
    return (
        <ul className="message-list">
            {
                messages?.map(({ content, id, author }) =>
                    <li key={id} >
                        <Message content={content} author={author} />
                    </li>
                )
            }
        </ul>
    );
};

export const MessageList = messagesConnect(MessageListRender);

