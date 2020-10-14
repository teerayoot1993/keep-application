import React, { Fragment } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7bc143",
    },
  },
});

const LoginElement = () => {
  return (
    <Fragment>
      <form className="mt-5">
        <h1 align="center">KEEP Application</h1>
        <br></br>
        <ThemeProvider theme={theme}>
          <div className="mb-3">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              variant="outlined"
              type="password"
            />
          </div>
          <div className="mt-3" align="center">
            <Button className="login-btn" variant="contained" color="primary">
              <strong>LOG IN</strong>
            </Button>
          </div>
        </ThemeProvider>
      </form>
    </Fragment>
  );
};

export default LoginElement;
