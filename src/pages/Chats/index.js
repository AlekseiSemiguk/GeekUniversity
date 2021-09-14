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
import { chatsApi } from "../../api";

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

export const ChatsRender = ({ chats, removeChat, deleteMessages }) => {
    const classes = useStyles();

    const [deletedChatTitle, setDeletedChatTitle] = useState("");

    const handleAddChat = async (e) => {
        e.preventDefault();

        const title = faker.lorem.word();

        try {
            await chatsApi.create(title)
        } catch (e) {
            console.log(e);
        }

    };

    const onChange = (event) => {
        setDeletedChatTitle(event.target.value);
    }

    /*const deleteChat = () => {

        removeChat(deletedChatID);
        deleteMessages(deletedChatID);
    }*/

    const handleDeleteChat = async (e) => {
        e.preventDefault();

        const deletedChat = chats.find(({ title }) => {
            return (title == deletedChatTitle);
        });

        if (deletedChat) {
            try {
                await chatsApi.delete(deletedChat.id)
            } catch (e) {
                console.log(e);
            }
        }

    };

    return (
        <div className={classes.container}>
            <Grid container >
                <Grid item md={6}>
                    <ChatList />
                    <Button className={classes.button} variant="contained" color="primary" type="button" onClick={handleAddChat}>Добавить чат</Button>
                    <br></br>
                    <Input id="outlined-multiline-static" label="Delete chat" color="secondary" variant="outlined" onChange={onChange} value={deletedChatTitle} placeholder="введите имя чата" />
                    <Button className={classes.button} variant="contained" color="secondary" type="button" onClick={handleDeleteChat}>Удалить чат</Button>

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