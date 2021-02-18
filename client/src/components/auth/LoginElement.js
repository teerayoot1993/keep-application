import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Alert } from "reactstrap";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { connect } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7bc143"
    }
  }
});

const init = {
  email: "",
  password: "",
  msg: null
};

const LoginElement = ({ isAuthenticated, error, login, clearErrors }) => {
  const [state, setState] = useState(init);

  useEffect(() => {
    // Check for login error
    if (error.id === "LOGIN_FAIL") {
      setState({
        ...state,
        msg: error.msg.msg
      });
    } else {
      setState({
        ...state,
        msg: null
      });
    }
  }, [error]);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = state;

    const user = {
      email,
      password
    };

    login(user);
    clearErrors();
  };
  return (
    <Fragment>
      <form className="mt-5" onSubmit={onSubmit}>
        <h1 align="center">KEEP Application</h1>
        <br></br>
        {state.msg ? <Alert color="danger">{state.msg}</Alert> : null}
        <ThemeProvider theme={theme}>
          <div className="mb-3">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              autoFocus={true}
              onChange={onChange}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="mt-3" align="center">
            <Button
              type="submit"
              className="login-btn"
              variant="contained"
              color="primary"
            >
              <strong>LOG IN</strong>
            </Button>
          </div>
        </ThemeProvider>
      </form>
    </Fragment>
  );
};

LoginElement.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginElement);
