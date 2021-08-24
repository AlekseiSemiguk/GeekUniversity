import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { mainTheme } from "./themes/mainTheme";
import { Header } from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";
import { useListState } from "./hooks/useListState";
//import './App.css';

function App() {

  const [chatList, { append: appendChat, remove: removeChat, addMessage }] = useListState();

  return (
    <div>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/chats">
            <Chats chatList={chatList} appendChat={appendChat} removeChat={removeChat} addMessage={addMessage} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
