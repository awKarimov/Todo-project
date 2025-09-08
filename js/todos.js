import { uiChanger } from "./ui-changer.js";

export let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

todos = [
  {
    title: "Todo 1",
    description: "qondaye",
    id: "1",
    isCompleted: "false",
  },
];

console.log(todos);

export function changeTodos(value) {
  todos = value;
  localStorage.setItem("todos", JSON.stringify(todos));
  uiChanger(todos);
}
