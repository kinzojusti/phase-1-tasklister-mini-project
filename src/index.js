document.addEventListener("DOMContentLoaded", () => {
  
  //functions 

  const createNewTask = (e) => {
    e.preventDefault();
    // console.log('submit')
     //grab the input 
    const newtaskDescription = document.getElementById('new-task-description')
    console.log(newtaskDescription.value)
    //create li
    const newLi = document.createElement('li')
    console.log(newLi)
     //print the input in the li
    newLi.textContent = newtaskDescription.value
    //append
    const ul = document.querySelector("#tasks")
    console.log(ul)
    ul.appendChild(newLi)
    e.target.reset();
  }
  
  // grab stuff
  const form = document.getElementById('create-task-form')
  
  
  //grab event listener
  form.addEventListener('submit', createNewTask)

});
