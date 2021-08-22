import React from 'react';
import { ChatItem } from "../ChatItem";
import { List, ListItem } from '@material-ui/core';
import { shape, string, arrayOf, number } from 'prop-types';

export const ChatList = ({ chatlist }) => {
    return (
        <List>
            {
                chatlist.map(({ name, id }) =>
                    <ListItem button key={id} >
                        <ChatItem name={name} id={id} />
                    </ListItem>
                )
            }
        </List>
    );
};

const ChatItemPropTypes = shape({
    id: number.isRequired,
    name: string.isRequired,
})

ChatList.propTypes = {
    chatlist: arrayOf(ChatItemPropTypes),
}

