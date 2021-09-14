import React from "react";
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        marginTop: 20,
    }
});

export const InputTextTestIds = {
    button: 'InputText-button',
}

export const InputText = ({ onSubmit, buttonText, onChange, text }) => {
    const classes = useStyles();

    const handleSubmit = () => {
        if (text != "") {
            onSubmit();
        }
    }

    return (
        <form>
            <TextField id="outlined-multiline-static" label="Your new name" color="secondary" multiline rows={1} variant="outlined" onChange={onChange} value={text} />
            <Button data-testid={InputTextTestIds.button} className={classes.button} variant="contained" color="primary" type="button" onClick={handleSubmit}>{buttonText}</Button>
        </form>
    );
};
