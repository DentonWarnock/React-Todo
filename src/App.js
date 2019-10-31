import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';
import "./Styles.css";
import { AppContainer } from "./Styles.js";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super() 
      this.state = {
        todos: []      
      }
  }

  addTodo = taskName => {
    console.log("add task: ", taskName);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: taskName,
          id: Date.now(),
          purchased: false
        }
      ]
    })
  }

  markComplete = todoID => {
    console.log("markComplete: ", todoID)

    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todoID) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearComplete = () => {
    console.log("clear complete");

    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }


  render() {
    return (
      <AppContainer>
        <div className="header">
          <h2>TODO LIST</h2>
          <TodoForm 
            addTodo={this.addTodo}
          />
        </div>
        <div className="list">
          <TodoList
            todoList={this.state.todos}
            markComplete={this.markComplete}
            clearComplete={this.clearComplete}
           />
        </div>
        
      </AppContainer>
    );
  }
}

export default App;
