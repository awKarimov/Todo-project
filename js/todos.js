import { uiChanger } from "./ui-changer.js";

export let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

todos = [
  {
    title: "Todo 1",
    description: "",
    id: "1",
    isCompleted: "false",
  },
];

export function changeTodos(value) {
  todos = value;
  localStorage.setItem("todos", JSON.stringify(todos));
  uiChanger(todos);
}
