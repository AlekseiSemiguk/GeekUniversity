import React from 'react';
import { MessageList } from "./components/MessageList";
import { InputForm } from "./components/InputForm";
import { useListState } from "./hooks/useListState";
import { useMessageState } from "./hooks/useMessageState";
import { useNewUserMessage } from "./hooks/useNewUserMessage";
import './App.css';

const createMessage = (author, text) => ({
  author,
  text
})

function App() {
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

  return (
    <div className="App">
      <MessageList messageList={messageList} />
      <InputForm onSubmit={sendMessage} onChange={onChangeMessage} buttonText="Отправить сообщение" text={messageText} />
    </div>
  );
}

export default App;
