import { addTodo } from "./crud.js";
import { elAddTodo, elInputText } from "./html-elements.js";
import { todos } from "./todos.js";
import { uiChanger } from "./ui-changer.js";

uiChanger(todos);

elAddTodo.addEventListener("click", () => {
  const title = elInputText.value;

  const result = {
    title,
    id: crypto.randomUUID(),
  };

  elInputText.value = "";

  addTodo(result);
});
