import { deleteTodo } from "./crud.js";
import { elCardTemplate, elTodosContainer } from "./html-elements.js";

export function uiChanger(todos) {
  elTodosContainer.innerHTML = "";
  todos.forEach((element) => {
    const clone = elCardTemplate.cloneNode(true).content;
    const elTitle = clone.querySelector("h5");
    const elDeleteBtn = clone.querySelector(".delete-btn");

    elTitle.innerText = element.title;
    elDeleteBtn.id = element.id;
    elDeleteBtn.addEventListener("click", (evt) => {
      deleteTodo(evt.target.id);
    });

    elTodosContainer.append(clone);
  });
}
