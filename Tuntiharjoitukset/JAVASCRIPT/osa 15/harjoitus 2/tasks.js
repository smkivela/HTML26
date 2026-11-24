// tasks.js – tehtävien tila ja tilan muuttaminen
// Ei tiedä sivusta eikä tallennuksesta mitään.

let tasks = [];

export function getTasks() {
  return tasks;
}

export function setTasks(newTasks) {
  tasks = newTasks;
}

// Uuden tehtävän lisääminen
export function addTask(text) {
  const task = {
    id: crypto.randomUUID(),
    text: text,
    completed: false,
  };

  tasks.push(task);
}

// Tehtävän tilan vaihtaminen
export function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = !task.completed;
  }
}

// Tehtävän poistaminen
export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}
