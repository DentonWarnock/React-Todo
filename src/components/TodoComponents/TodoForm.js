import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          type="text" 
          name="todo"
          value={this.state.inputValue} 
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;