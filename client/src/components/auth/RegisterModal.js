import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

const init = {
  modal: false,
  name: "",
  email: "",
  password: "",
  msg: null
};

const RegisterModal = ({ isAuthenticated, error, register, clearErrors }) => {
  const [state, setState] = useState(init);

  useEffect(() => {
    // Check for register error
    if (error.id === 'REGISTER_FAIL') {
      setState({
      ...state,
      msg: error.msg.msg
      })
    } else {
      setState({
        ...state,
        msg: null
      })
    }    
  }, [error])

  useEffect(() => {
    // If authenticated, close modal
    if (state.modal) {
      if (isAuthenticated) {
        toggle()
      }
    }
  })

  const toggle = () => {
    // Clear errors
    clearErrors()
    setState({
      ...state,
      modal: !state.modal,
      name: "",
      email: "",
      password: "",
      msg: null
    })
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault()

    const { name, email, password } = state

    // Create user object
    const newUser = {
      name,
      email,
      password
    }

    // Attemp to register
    register(newUser)
  }

  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>

      <Modal isOpen={state.modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          style={{ background: "#7bc143", color: "#ffffff" }}
        >
          Member Register
        </ModalHeader>
        <ModalBody>
          {state.msg ? <Alert color="danger">{state.msg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={onChange}
              />

              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={onChange}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={onChange}
              />

              <Button
                color="dark"
                style={{ background: "#7bc143", marginTop: "2rem" }}
                block
              >
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, {
  register,
  clearErrors
})(
  RegisterModal
);
