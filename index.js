const todoList = document.getElementById("todo-list");
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", onClickAdd);
input.addEventListener("input", onTypeTodo);

function onClickAdd() {
  const li = createListItem(input.value);
  todoList.appendChild(li);
  input.value = "";
  addButton.disabled = true;
}

function onTypeTodo() {
  addButton.disabled = input.value.length === 0;
}

function createListItem(name) {
  const listItem = document.createElement("li");
  const heading = document.createElement("span");
  heading.textContent = name;
  const deleteButton = document.createElement("button");

  listItem.classList.add("todo-item");
  deleteButton.textContent = "X";
  deleteButton.id = "delete-button";
  deleteButton.addEventListener("click", onClickDelete);

  listItem.appendChild(heading);
  listItem.appendChild(deleteButton);

  return listItem;
}

function onClickDelete() {
  this.parentNode.remove();
}
