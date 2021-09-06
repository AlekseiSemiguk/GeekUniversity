import React from 'react';
import { Grid } from '@material-ui/core';
import { MessageList } from "../../components/MessageList";
import { InputForm } from "../../components/InputForm";
import { useParams, Redirect } from "react-router-dom";
import { useMessageState } from "../../hooks/useMessageState";
import { messagesConnect } from "../../connects/messages";
import { chatsConnect } from "../../connects/chats";

export const ChatRender = ({ addMessageWithThunk, chats }) => {

    const { chatId } = useParams();

    const [messageText, { setMessageState, clearMessageState, validateMessage }] = useMessageState();

    const currentChat = chats.find(({ id }) => {
        return (id == chatId);
    });

    if (!currentChat) {
        return <Redirect to="/chats" />
    }

    const onChangeMessage = (event) => {
        setMessageState(event.target.value);
    }

    const sendMessage = () => {
        if (validateMessage()) {
            const message = {
                chatId,
                author: 'user',
                id: Date.now().toString(),
                content: messageText,
            };
            addMessageWithThunk(message);
            clearMessageState();
        }
    }

    return (
        <Grid container>
            <Grid item md={5}>
                <MessageList chatId={chatId} />

            </Grid>
            <Grid item md={3}>
                <InputForm onSubmit={sendMessage} onChange={onChangeMessage} buttonText="Отправить сообщение" text={messageText} />
            </Grid>
        </Grid>
    );
};


export const Chat = chatsConnect(messagesConnect(ChatRender));
