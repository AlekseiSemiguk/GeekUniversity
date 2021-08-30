import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { ChatList } from "../../components/ChatList";
import { Chat } from "../Chat";
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import faker from 'faker';

const createChat = (name, arrMessages) => ({
    name,
    arrMessages,
})

const useStyles = makeStyles({
    button: {
        marginTop: 20,
    }

});

export const Chats = ({ chatList, appendChat, removeChat, addMessage }) => {
    const classes = useStyles();

    const [deletedChatID, setDeletedChatID] = useState("");


    const addChat = () => {
        appendChat(createChat(faker.lorem.word(), []));
    }

    const onChange = (event) => {
        setDeletedChatID(event.target.value);
    }

    const deleteChat = () => {
        const chatForDel = chatList.find(({ id }) => (id == deletedChatID));
        const index = chatList.indexOf(chatForDel);
        removeChat(index);
        setDeletedChatID("");
    }

    return (
        <Grid container>
            <Grid item md={3}>
                <ChatList chatlist={chatList} />
                <Button className={classes.button} variant="contained" color="primary" type="button" onClick={addChat}>Добавить чат</Button>
                <br></br>
                <Input id="outlined-multiline-static" label="Delete chat" color="secondary" variant="outlined" onChange={onChange} value={deletedChatID} />
                <Button className={classes.button} variant="contained" color="secondary" type="button" onClick={deleteChat}>Удалить чат</Button>

            </Grid>
            <Grid item md={9}>
                <Route path='/chats/:chatId'>
                    <Chat chats={chatList} addMessage={addMessage} />
                </Route>
            </Grid>
        </Grid>
    );
};