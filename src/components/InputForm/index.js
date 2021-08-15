import React from 'react';
import './index.css';

export const InputForm = ({ onSubmit, buttonText, onChange, text }) => {

    return (
        <form className="input-form">
            <textarea onChange={onChange} className="input-form_textarea" value={text} />
            <button className="input-form_button" type="button" onClick={onSubmit}>{buttonText}</button>
        </form>
    );
};