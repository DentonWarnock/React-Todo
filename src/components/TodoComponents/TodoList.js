import React from 'react';
import Todo from './Todo';
import { StyledButton } from "../../Styles.js";

class TodoList extends React.Component {

  showButton = () => {
    return this.props.todoList.length > 0 ? 
    <div className="clear">
    <div className="instructions">(click items to mark completed)</div>
     <StyledButton className="clear-btn" onClick={this.props.clearComplete}>
       Clear Completed
    </StyledButton></div> : null
  }

  render() {
    return (
      <div className="todo-list">
        {this.props.todoList.map(item => (
          <Todo 
            item={item} 
            key={item.id}
            markComplete={this.props.markComplete}
            />
          ))}
        {this.showButton()}
      </div>
    )
  }
}

export default TodoList;