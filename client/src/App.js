import React, { useEffect } from "react";
import Navbar from "./components/AppNavBar";
import LoginElement from "./components/auth/LoginElement";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import store from './store'
import { Provider } from 'react-redux'
import { loadUser } from './actions/authActions'

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Container className="d-flex justify-content-center">
          <LoginElement />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
