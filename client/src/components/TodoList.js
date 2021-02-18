import React, { useEffect, useState } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addTodo, getTodos, deleteTodo } from "../actions/todoActions";

const init = {
  name: ""
};

const TodoList = ({ addTodo, getTodos, deleteTodo, todo }) => {
  const [state, setState] = useState(init);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    console.log(state);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      name: state.name
    };

    addTodo(newTodo);
    setState({
      ...state,
      name: ""
    });
  };

  useEffect(() => {
    getTodos();
  }, [getTodos, addTodo]);

  return (
    <Container>
      <ListGroup>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="item">New Todo Item</Label>
            <Input
              value={state.name}
              type="text"
              name="name"
              id="todo"
              placeholder="Add todo item"
              onChange={onChange}
              autoFocus={true}
            />
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Add Todo
            </Button>
          </FormGroup>
        </Form>
        <TransitionGroup className="shopping-list">
          {todo.todos.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={deleteTodo.bind(this, _id)}
                >
                  &times;
                </Button>

                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps, {
  addTodo,
  getTodos,
  deleteTodo
})(TodoList);
