

function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML += `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"

  
    allTasksContainer.appendChild(liTag)
     inputData.value = ""

    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn = liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"

    dlteBtn.addEventListener("click",()=>{
        deleteTask(liTag)
        console.log("df is called");
        
    })   
    editBtn.addEventListener("click",()=>{
        editTask(liTag)
    })
}

function deleteTask(liTag){
    let a=confirm("do you want to delete this task")
    if(a){
        liTag.remove()
    }
}

function editTask(item){
    let x=prompt("Enter the data",item.firstChild.textContent)
    if(x !==null && x.trim()!==""){
        item.firstChild.textContent=x
    }
}