const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function createTask(te2411xt) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = text;

    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    taskList.appendChild(taskItem);
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        taskInput.focus();
        return;
    }

    createTask(taskText);
    taskInput.value = "";
    taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});