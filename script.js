const inputBox = document.getElementById("todo-input");
const listcontainer = document.getElementById("todo-list");

function addTask() {
  // to add task in the form of li
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span"); // for the cross emoji
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); // whenever new data is added it is stored in local storage
}

listcontainer.addEventListener(
  "click",
  function (e) {
    // will check the uncheck and uncheck the check task
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // to remove the task
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  // to save the data in local storage
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
