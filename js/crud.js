import { changeTodos, todos } from "./todos.js";

// Get todo
export function getTodo(id) {
  const result = todos.find((el) => {
    return el.id === id;
  });
  return result;
}

// Create Todo

// Delete todo

export function deleteTodo(id) {
  const result = todos.filter((el) => {
    return el.id != id;
  });

  changeTodos(result);
}

// Update Todo

export function updateTodo(updatedTodo) {
  const result = todos.map((todo) => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo;
    }
    return todo;
  });
  changeTodos(result);
}
