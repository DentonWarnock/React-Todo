import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super() 
      this.state = {
        task: "some task",
        id: 1,
        completed: false      
    }
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>TODO LIST</h2>
          <TodoForm />
        </div>
        <div className="list">
          <TodoList />
        </div>
        
      </div>
    );
  }
}

export default App;
