import React, { Fragment } from "react";
import LoginElement from "./auth/LoginElement";
import TodoList from "./TodoList";

import { connect } from "react-redux";
import PropTypes from "prop-types";

function AppBody({ auth }) {
  const { isAuthenticated } = auth;
  return (
    <Fragment>{isAuthenticated ? <TodoList /> : <LoginElement />}</Fragment>
  );
}

AppBody.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppBody);
