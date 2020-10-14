import React from "react";
import Navbar from "./components/AppNavBar";
import LoginElement from "./components/LoginElement";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="d-flex justify-content-center">
        <LoginElement />
      </Container>
    </div>
  );
}

export default App;
