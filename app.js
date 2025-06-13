function setup() {
   
  // 
    const taskInput = document.getElementById("task-text")
    const addButton = document.getElementById("add-task")
    const tasks = document.getElementById("tasks")
    
    function addTask() {
      const taskText = document.getElementById("task-text")
      const text = taskText.value.trim()
      
      if (text === "") {
        return
      }
      
      // Anchor to dynamically add a new task
      const li = document.createElement("li")
      
      const checkbox = document.createElement("input")
      checkbox.type = "checkbox"
      
      const textElem = document.createElement("span")
      textElem.textContent = text
      
      const deleteButton = document.createElement("button")
      deleteButton.textContent = "Delete"
      deleteButton.addEventListener("click", deleteTask)
      
      li.appendChild(checkbox)
      li.appendChild(textElem)
      li.appendChild(deleteButton)
      
      tasks.appendChild(li)
    
      taskText.value = ""
    }
    
    // delete a task on the list with a button 
    function deleteTask(deleteButtonClickEvent) {
      const clickedDeleteButton = deleteButtonClickEvent.target
      const li = clickedDeleteButton.parentNode
      li.remove()
    }
    
    // add tasks with "enter" to save time
    taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addTask()
      }
    });

    // li.addEventListener("keydown", (event) => {
    //   if (event.key === "Backspace") {
    //     deleteTask()
    //   }
    // });
    
    // the button addEventListener
    addButton.addEventListener("click", addTask)
}
