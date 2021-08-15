import { useState } from "react";

export const useMessageState = () => {
    const [text, setText] = useState();

    const setMessageState = (messageText) => setText(messageText);
    const clearMessageState = () => setText('');

    const validateMessage = () => {
        if (text !== "") {
            return true;
        } else {
            return false;
        }
    }

    return [
        text,
        {
            setMessageState,
            clearMessageState,
            validateMessage,
        }
    ]
}