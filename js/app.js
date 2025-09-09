import { addTodo } from "./crud.js";
import { elAddTodo, elInputText, elCheckText } from "./html-elements.js";
import { todos } from "./todos.js";
import { uiChanger } from "./ui-changer.js";

uiChanger(todos);

elAddTodo.addEventListener("click", (e) => {
  e.preventDefault();

  const title = elInputText.value.trim();

  if (title.length === 0) {
    elCheckText.textContent = "Please write some text!";

    setTimeout(() => {
      elCheckText.textContent = "";
    }, 2000);
    return;
  }

  const result = {
    title,
    id: crypto.randomUUID(),
  };

  addTodo(result);
});
