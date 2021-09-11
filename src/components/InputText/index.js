import React from "react";
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        marginTop: 20,
    }
});

export const InputText = ({ onSubmit, buttonText, onChange, text }) => {
    const classes = useStyles();

    return (
        <form>
            <TextField id="outlined-multiline-static" label="Your new name" color="secondary" multiline rows={1} variant="outlined" onChange={onChange} value={text} />
            <Button className={classes.button} variant="contained" color="primary" type="button" onClick={onSubmit}>{buttonText}</Button>
        </form>
    );
};
