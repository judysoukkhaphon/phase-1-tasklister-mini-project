document.addEventListener("DOMContentLoaded", () => {
  // your code here
});




var submit = document.getElementById('submit');

submit.addEventListener('click', eventfunction);



function eventfunction(event) {
  var newTask = document.getElementById('new-task-description').value;
  let taskList = document.getElementById('tasks');
  taskList.innerHTML = newTask;
  event.preventDefault();
}