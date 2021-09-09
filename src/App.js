import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { mainTheme } from "./themes/mainTheme";
import { Header } from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";
import { RandomPerson } from "./pages/RandomPerson";

function App() {
  return (
    <div>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/person">
            <RandomPerson />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
