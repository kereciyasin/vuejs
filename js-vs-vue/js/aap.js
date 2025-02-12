const todoText = document.querySelector("#todoText");
const todoList = document.querySelector("#todoList");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.append(listItem);
}); 