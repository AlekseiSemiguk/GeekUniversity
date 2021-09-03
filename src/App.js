import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { mainTheme } from "./themes/mainTheme";
import { Header } from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";
import { Provider } from 'react-redux';
import { store } from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
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
          </Switch>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
