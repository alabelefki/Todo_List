// Setting up Variables

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus On Input Field
window.onload = function() {
    theInput.focus();
  };

//Adding the task 
theAddButton.onclick = ()=>{
    
    //If input is Empty
    if(theInput.value === ''){
        swal("Oops!", "Please add your Task!", "error");   

    } else {
        let noTasksMsg = document.querySelector(".no-tasks-message");

        //check if span with no tasks message  is exist
        if(document.body.contains(document.querySelector(".no-tasks-message"))){
           
        //REmove No tasks Message
        noTasksMsg.remove();
        }

        //Create Span Elements
        let mainSpan = document.createElement("span")

        //create delete button
        let deleteElement=document.createElement("span")

        //Create the span text
        let text=document.createTextNode(theInput.value)

        //create the delete button text
        let deleteText=document.createTextNode("Delete")

        //add text to span
        mainSpan.appendChild(text)

        //add class to span
        mainSpan.className= 'task-box'

        //add text to delete button
        deleteElement.appendChild(deleteText)

        //add class to delete button
        deleteElement.className= 'delete'

        // add delete button to main span 
        mainSpan.appendChild(deleteElement)

        //add the task to the container
        tasksContainer.appendChild(mainSpan)

        //Empty the input
        theInput.value='';

        //focus on field
        theInput.focus();

        //calculate tasks
        calculateTasks();

        }
  };

document.addEventListener('click', function(e){
    
    //delete Task
    if(e.target.className === 'delete'){

        //remove current task
        e.target.parentNode.remove()

        //check number of tasks inside the container
        if(tasksContainer.childElementCount==0){
            createNoTasks();
        }
    }

        //finish Task
    if(e.target.classList.contains("task-box")){

        //toggle class 'finished'
        e.target.classList.toggle("finished")

    }
        //calculate tasks
        calculateTasks();
});

//function to create No Tasks Message
function createNoTasks(){
    let spanNoTasks = document.createElement('span');
    let textNoTasks= document.createTextNode('No Tasks To Show');
    spanNoTasks.appendChild(textNoTasks);
    spanNoTasks.className = 'no-tasks-message';
    tasksContainer.appendChild(spanNoTasks);
}

// function to calculate tasks
function calculateTasks() {

    //calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}