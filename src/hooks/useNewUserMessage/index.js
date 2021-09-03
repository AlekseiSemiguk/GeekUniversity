import { useEffect } from "react";


export const useNewUserMessage = (messageList, fn, dependencies) => {

    useEffect(() => {
        const timer1 = setTimeout(() => {
            let lastMessage = messageList[messageList.length - 1];
            if (lastMessage && "author" in lastMessage && lastMessage.author === "user") {
                fn();
            }
        }, 1500);

        return () => {
            clearTimeout(timer1);
        }

    }, dependencies);
}
