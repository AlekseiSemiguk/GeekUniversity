import React from 'react';
import { Grid } from '@material-ui/core';
import { MessageList } from "../../components/MessageList";
import { InputForm } from "../../components/InputForm";
import { useParams, Redirect } from "react-router-dom";
import { useMessageState } from "../../hooks/useMessageState";


export const Chat = ({ chats, addMessage }) => {

    const { chatId } = useParams();

    const currentChat = chats.find(({ id }) => {
        return (id == chatId);
    });

    const [messageText, { setMessageState, clearMessageState, validateMessage }] = useMessageState();

    if (!currentChat) {
        return <Redirect to="/chats" />
    }

    const onChangeMessage = (event) => {
        setMessageState(event.target.value);
    }

    const sendMessage = () => {
        if (validateMessage()) {
            addMessage(chatId, messageText);
            clearMessageState();
        }
    }

    return (
        <Grid container>
            <Grid item md={3}>
                <MessageList messageList={currentChat.arrMessages} />

            </Grid>
            <Grid item md={3}>
                <InputForm onSubmit={sendMessage} onChange={onChangeMessage} buttonText="Отправить сообщение" text={messageText} />
            </Grid>
        </Grid>
    );
};

