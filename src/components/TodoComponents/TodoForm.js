import React from 'react';
import { StyledForm, StyledButton } from "../../Styles.js";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value 
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      this.props.addTodo(this.state.inputValue);
      this.setState({
        inputValue: ""
      })
    }
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          type="text" 
          name="todo"
          placeholder="...todo"
          value={this.state.inputValue} 
        />
        <StyledButton>Add Todo</StyledButton>
      </StyledForm>
    )
  }
}

export default TodoForm;