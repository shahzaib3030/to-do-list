function addTask() {


let input = document.getElementById("task");

let taskText = input.value.trim();

if (taskText === "") {
    return;
}

let li = document.createElement("li");

li.textContent = taskText;

let deleteButton = document.createElement("button");

deleteButton.textContent = "Delete";

deleteButton.className = "delete-btn";

deleteButton.onclick = function () {
    li.remove();
};

li.appendChild(deleteButton);

document.getElementById("task-list").appendChild(li);

input.value = "";


}
