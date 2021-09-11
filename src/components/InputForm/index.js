import React from "react";
import './index.css';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        marginTop: 20,
    }
});

export const InputForm = ({ onSubmit, buttonText, onChange, text }) => {
    const classes = useStyles();

    return (
        <form>
            <TextField id="outlined-multiline-static" label="Your message" color="secondary" multiline rows={4} variant="outlined" onChange={onChange} value={text} />
            <Button className={classes.button} variant="contained" color="primary" type="button" onClick={onSubmit}>{buttonText}</Button>
        </form>
    );
};
