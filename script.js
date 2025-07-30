function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as completed on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
