import React from 'react';
import { TodoCard } from "../../Styles.js";

const Todo = props => {
  let verboseClassName = "item";
  if (props.item.completed) {
    verboseClassName = verboseClassName + " completed";
  }

  const handleClick = () => {
    props.markComplete(props.item.id)
  }

  console.log(props)
  return (
    <TodoCard  className={verboseClassName} onClick={handleClick} key={props.item.id}>
      <div>{props.item.task}</div>
    </TodoCard>
  )
}

export default Todo;