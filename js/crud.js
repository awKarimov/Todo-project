import { elCheckText, elInputText, elAddTodo } from "./html-elements.js";
import { changeTodos, todos } from "./todos.js";

let editingId = "";

// Add Todo

export function addTodo(obj) {
  if (obj.title.trim().length === 0) {
    elCheckText.textContent = "Please write some text!";
    setTimeout(() => {
      elCheckText.textContent = "";
    }, 2000);
    return;
  }

  if (editingId !== "") {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, title: obj.title } : todo
    );
    changeTodos(updatedTodos);
    editingId = "";
    elAddTodo.textContent = "Add";
  } else {
    todos.push(obj);
    changeTodos(todos);
  }

  elInputText.value = "";
}

// Delete Todo

export function deleteTodo(id) {
  const filtered = todos.filter((todo) => todo.id !== id);
  changeTodos(filtered);

  if (editingId === id) {
    editingId = "";
    elInputText.value = "";
    elAddTodo.textContent = "Add";
  }
}

// Edit Todo

export function startEditTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  editingId = id;
  elInputText.value = todo.title;
  elAddTodo.textContent = "Save";
}
