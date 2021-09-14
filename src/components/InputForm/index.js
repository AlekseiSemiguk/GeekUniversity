import React from "react";
import './index.css';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const InputFormTestIDs = {
    textButton: 'InputForm_textButton',
}

export class InputForm extends React.Component {

    render() {

        return (
            <form>
                <TextField id="outlined-multiline-static" label="Your message" color="secondary" multiline rows={4} variant="outlined" onChange={this.props.onChange} value={this.props.text} />
                <Button data-testid={InputFormTestIDs.textButton} variant="contained" color="primary" type="button" onClick={this.props.onSubmit}>{this.props.buttonText}</Button>
            </form>
        );
    }
}
