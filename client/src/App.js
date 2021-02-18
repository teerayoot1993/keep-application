import React, { useEffect } from "react";
import Navbar from "./components/AppNavBar";
import AppBody from "./components/AppBody";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/authActions";

function App() {
  useEffect(() => {
    console.log();
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Container className="d-flex justify-content-center">
          <AppBody />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
