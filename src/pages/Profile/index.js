import React from 'react';
//import { IconButton } from "@material-ui/core";
//import Checkbox from '@material-ui/core/Checkbox';
//import { useDispatch, useSelector } from 'react-redux';
//import { createActionToggleSubscribe } from "../../store/profile/actions";
import { useMessageState } from "../../hooks/useMessageState";
import { InputText } from "../../components/InputText";
import { profileConnect } from "../../connects/profile";
import { profileApi } from "../../api";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        maxWidth: 980,
        margin: 'auto',
        lineHeight: 2
    }
});

export const ProfileRender = ({ username }) => {
    //const dispatch = useDispatch();
    //const subscribeStatus = useSelector((state) => state.subscribe);
    const classes = useStyles();

    const [text, { setMessageState: setName, clearMessageState: clearNameState, validateMessage: validateName }] = useMessageState();

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const handleSaveName = async (e) => {
        e.preventDefault();

        if (validateName()) {

            try {
                await profileApi.updateUserName(text)
            } catch (e) {
                console.log(e);
            }

            clearNameState();
        }

    };


    return (
        <div className={classes.container}>
            {/*Подписаться на новости:
            <IconButton>
                <Checkbox
                    checked={subscribeStatus}
                    onChange={() => {
                        dispatch(createActionToggleSubscribe(!subscribeStatus))
                    }}
                />
                </IconButton>*/}
            Ваше имя: {username}
            <InputText onSubmit={handleSaveName} onChange={onChangeName} buttonText="Сохранить" text={text} />

        </div>
    );
};

export const Profile = profileConnect(ProfileRender);