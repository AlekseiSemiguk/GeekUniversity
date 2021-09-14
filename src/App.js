import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { mainTheme } from "./themes/mainTheme";
import { Header } from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";
import { RandomPerson } from "./pages/RandomPerson";
import { getIsAuth, initAuthAction } from "./store/user";
import { PrivateRoute } from "./hocs/PrivateRoute";
import { PublicRoute } from "./hocs/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { initChatsTracking } from "./store/chats";
import { initUserName } from "./store/profile";

function App() {

  const isAuth = useSelector(getIsAuth);
  const prevIsAuth = useRef(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth !== prevIsAuth.current) {
      dispatch(initChatsTracking)
      dispatch(initUserName)
    }
  }, [isAuth])

  useEffect(() => {
    dispatch(initAuthAction)
  }, [])

  return (
    <div>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <Switch>
          <PublicRoute auth={isAuth} exact path="/">
            <Home />
          </PublicRoute>
          <PublicRoute auth={isAuth} exact path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute auth={isAuth} exact path="/signup">
            <SignUp />
          </PublicRoute>
          <PrivateRoute auth={isAuth} path="/chats">
            <Chats />
          </PrivateRoute>
          <PrivateRoute auth={isAuth} path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/person">
            <RandomPerson />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;