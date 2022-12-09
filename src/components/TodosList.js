import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (prop) => {
  const { todos } = prop;
  const { handleChangeProps, deleteTodoProps, setUpdate } = prop;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
