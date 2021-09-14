import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { MessageList } from "../../components/MessageList";
import { InputForm } from "../../components/InputForm";
import { useParams, Redirect } from "react-router-dom";
import { useMessageState } from "../../hooks/useMessageState";
import { messagesConnect } from "../../connects/messages";
import { chatsConnect } from "../../connects/chats";
import { profileConnect } from "../../connects/profile";
import { messagesApi } from "../../api";

import { useDispatch } from "react-redux";
import { initMessagesTracking } from "../../store/messages";


export const ChatRender = ({ chats, username }) => {

    /*const isAuth = useSelector(getIsAuth);
    const prevIsAuth = useRef(isAuth);*/

    const dispatch = useDispatch();

    const { chatId } = useParams();

    useEffect(() => {
        dispatch(initMessagesTracking(chatId))
    }, [chatId])


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

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (validateMessage()) {

            try {
                await messagesApi.create(chatId, username, messageText)
            } catch (e) {
                console.log(e);
            }
            clearMessageState();
        }

    };

    return (
        <Grid container>
            <Grid item md={8}>
                <MessageList chatId={chatId} />

            </Grid>

            <Grid item md={8}>
                <InputForm onSubmit={handleSendMessage} onChange={onChangeMessage} buttonText="Отправить сообщение" text={messageText} />
            </Grid>
        </Grid>
    );
};


export const Chat = profileConnect(chatsConnect(messagesConnect(ChatRender)));
