import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { ChatList } from "../../components/ChatList";
import { Chat } from "../Chat";
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import faker from 'faker';
import { chatsConnect } from "../../connects/chats";
import { messagesConnect } from "../../connects/messages";

const useStyles = makeStyles({
    button: {
        marginTop: 20,
    },
    container: {
        maxWidth: 980,
        margin: 'auto',
        lineHeight: 2
    }
});

export const ChatsRender = ({ addChat, removeChat, deleteMessages }) => {
    const classes = useStyles();

    const [deletedChatID, setDeletedChatID] = useState("");

    const handleAddChat = () => {
        const newChat = {
            id: Date.now().toString(),
            title: faker.lorem.word(),
        }
        addChat(newChat);
    }

    const onChange = (event) => {
        setDeletedChatID(event.target.value);
    }

    const deleteChat = () => {
        removeChat(deletedChatID);
        deleteMessages(deletedChatID);
    }

    return (
        <div className={classes.container}>
            <Grid container >
                <Grid item md={6}>
                    <ChatList />
                    <Button className={classes.button} variant="contained" color="primary" type="button" onClick={handleAddChat}>Добавить чат</Button>
                    <br></br>
                    <Input id="outlined-multiline-static" label="Delete chat" color="secondary" variant="outlined" onChange={onChange} value={deletedChatID} placeholder="введите ID чата" />
                    <Button className={classes.button} variant="contained" color="secondary" type="button" onClick={deleteChat}>Удалить чат</Button>

                </Grid>
                <Grid item md={6}>
                    <Route path='/chats/:chatId'>
                        <Chat />
                    </Route>
                </Grid>
            </Grid>
        </div>
    );
};

export const Chats = messagesConnect(chatsConnect(ChatsRender));