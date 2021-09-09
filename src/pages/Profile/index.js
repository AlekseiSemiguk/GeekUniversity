import React from 'react';
import { IconButton } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { createActionToggleSubscribe } from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const subscribeStatus = useSelector((state) => state.subscribe);

    return (
        <div>
            Подписаться на новости:
            <IconButton>
                <Checkbox
                    checked={subscribeStatus}
                    onChange={() => {
                        dispatch(createActionToggleSubscribe(!subscribeStatus))
                    }}
                />
            </IconButton>

        </div>
    );
};