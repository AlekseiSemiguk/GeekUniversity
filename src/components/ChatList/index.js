import React from 'react';
import { ChatItem } from "../ChatItem";
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import PropTypes, { shape, string, arrayOf, number } from 'prop-types';


export const ChatList = ({ chatlist }) => {
    return (
        <List>
            {
                chatlist.map(({ name, id }) =>
                    <ListItem button key={id} to={`/chats/${id}`} component={RouterLink}>
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
    arrMessage: arrayOf(PropTypes.number),
})

ChatList.propTypes = {
    chatlist: arrayOf(ChatItemPropTypes),
}

