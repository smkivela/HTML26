// main.js – sovelluksen käynnistys, yhdistää muut tiedostot

import { getTasks, setTasks, addTask, toggleTask, deleteTask } from "./tasks.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./taskView.js";

// Tallenna ja piirrä uudelleen aina kun tehtävät muuttuvat
function update() {
  saveTasks(getTasks());
  renderTasks(getTasks(), handleToggle, handleDelete);
}

function handleToggle(id) {
  toggleTask(id);
  update();
}

function handleDelete(id) {
  deleteTask(id);
  update();
}

// Sovelluksen käynnistys
function init() {
  setTasks(loadTasks());
  renderTasks(getTasks(), handleToggle, handleDelete);

  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
      return;
    }

    addTask(text);
    update();

    input.value = "";
    input.focus();
  });
}

init();
