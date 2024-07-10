const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deadlineDateInput = document.getElementById("deadline-date");

function addTask() {
  if (inputBox.value === "") {
    alert("Le champ est vide !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let spanDelete = document.createElement("span");
    spanDelete.innerHTML = "\u00d7";
    spanDelete.classList.add("delete");
    li.appendChild(spanDelete);

    let spanEdit = document.createElement("span");
    spanEdit.innerHTML = "\u270E";
    spanEdit.classList.add("edit");
    li.appendChild(spanEdit);

    listContainer.appendChild(li);
  }
  inputBox.value = "";

  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      toggleTaskCompletion(e.target);
    } else if (
      e.target.tagName === "SPAN" &&
      e.target.classList.contains("delete")
    ) {
      e.target.parentElement.remove();
      saveData();
    } else if (
      e.target.tagName === "SPAN" &&
      e.target.classList.contains("edit")
    ) {
      editTask(e.target.parentElement);
    }
  },
  false
);

document.getElementById("buttonTodo").addEventListener("click", function () {
  addTask();
});

function toggleTaskCompletion(li) {
  li.classList.toggle("checked");
  let finishedElement = li.querySelector(".finished-date");
  if (li.classList.contains("checked")) {
    if (!finishedElement) {
      li.appendChild(finishedElement);
    }
  } else {
    if (finishedElement) {
      finishedElement.remove();
    }
  }
  saveData();
}

function editTask(li) {
  let currentText = li.childNodes[0].nodeValue;
  let inputText = document.createElement("input");
  inputText.type = "text";
  inputText.value = currentText;
  inputText.classList.add("edit-input");
  li.innerHTML = "";
  li.appendChild(inputText);
  inputText.focus();
  inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      updateTask(li, inputText.value);
    }
  });
}

function updateTask(li, newText, newDeadline) {
  if (newText.trim() === "") {
    alert("Le nom de la tâche ne peut pas être vide !");
    return;
  }

  li.innerHTML = newText;

  let spanDelete = document.createElement("span");
  spanDelete.innerHTML = "\u00d7";
  spanDelete.classList.add("delete");
  li.appendChild(spanDelete);

  let spanEdit = document.createElement("span");
  spanEdit.innerHTML = "\u270E";
  spanEdit.classList.add("edit");
  li.appendChild(spanEdit);

  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
