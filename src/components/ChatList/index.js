import React from 'react';
import { ChatItem } from "../ChatItem";
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import { chatsConnect } from "../../connects/chats";

export const ChatListRender = ({ chats }) => {
    return (
        <List>
            {
                chats.map(({ title, id }) =>
                    <ListItem button key={id} to={`/chats/${id}`} component={RouterLink}>
                        <ChatItem title={title} />
                    </ListItem>
                )
            }
        </List>
    );
};

export const ChatList = chatsConnect(ChatListRender)