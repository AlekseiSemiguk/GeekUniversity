import React, { useEffect } from 'react';
import { ChatList } from "./components/ChatList";
import { MessageList } from "./components/MessageList";
import { InputForm } from "./components/InputForm";
import { useListState } from "./hooks/useListState";
import { useMessageState } from "./hooks/useMessageState";
import { useNewUserMessage } from "./hooks/useNewUserMessage";
import { ThemeProvider } from '@material-ui/core';
import { mainTheme } from "./themes/mainTheme";
import { useState } from "react";

import './App.css';

const createMessage = (author, text) => ({
  author,
  text
})

const createChat = (name) => ({
  name
})


function App() {
  const [startApp, setStartApp] = useState(true);
  const [chatList, { append: appendChat }] = useListState();
  const [messageList, { append: appendMessage }] = useListState();
  const [messageText, { setMessageState, clearMessageState, validateMessage }] = useMessageState();


  const onChangeMessage = (event) => {
    setMessageState(event.target.value);
  }

  const sendMessage = () => {
    if (validateMessage()) {
      appendMessage(createMessage('user', messageText));
      clearMessageState();
    }
  }

  useNewUserMessage(messageList, () => { appendMessage(createMessage('bot', "Hello, i'am bot Vasya")) }, [messageList.length]);

  useEffect(() => {
    appendChat(createChat('First'), createChat('Second'));
  }, [startApp]);

  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <ChatList chatlist={chatList} />
        <MessageList messageList={messageList} />
        <InputForm onSubmit={sendMessage} onChange={onChangeMessage} buttonText="Отправить сообщение" text={messageText} messageListLength={messageList.length} />
      </ThemeProvider>
    </div>
  );
}

export default App;
