// HTML Elemanlarını Seçme
const inputField = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// LocalStorage'dan Verileri Getirme
const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];
const saveTodos = (todos) => localStorage.setItem("todos", JSON.stringify(todos));

// Listeyi Güncelleme
function updateList() {
    todoList.innerHTML = ""; // Mevcut listeyi temizle
    const todos = getTodos();
    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `
            <span>${todo.text}</span>
            <button class="btn btn-danger btn-sm delete-button" data-index="${index}">X</button>
        `;
        todoList.appendChild(listItem);
    });
}

// Yeni Görev Ekleme
addButton.addEventListener("click", () => {
    const todoText = inputField.value.trim();
    if (todoText === "") {
        alert("Boş bir görev ekleyemezsiniz!");
        return;
    }

    const todos = getTodos();
    todos.push({ text: todoText });
    saveTodos(todos);
    inputField.value = "";
    updateList();
});

// Görev Silme
todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        const index = event.target.getAttribute("data-index");
        const todos = getTodos();
        todos.splice(index, 1); // Belirtilen görevi sil
        saveTodos(todos);
        updateList();
    }
});

// Sayfa Yüklendiğinde Listeyi Güncelle
document.addEventListener("DOMContentLoaded", updateList);
