
// let productdata=JSON.parse(localStorage.getItem('productlist'))
let listdata = JSON.parse(localStorage.getItem('tasklist'))

let taskform = document.getElementById('taskForm')
taskform.addEventListener("submit", (e) => {
    e.preventDefault()
    // alert("hello")

    const tasktitle = document.querySelector('#tasktitle').value
    const taskduedate = document.querySelector('#taskduedate').value
    const taskdesc = document.querySelector('#taskdesc').value
    const taskPriority = document.querySelector('#taskPriority').value

    // console.log(tasktitle);
    // console.log(taskduedate);
    let arr = listdata || []
    const obj = { tasktitle, taskduedate, taskdesc, taskPriority }
    // console.log(obj);
   
    arr.push(obj)
    // console.log(arr);
    localStorage.setItem('tasklist', JSON.stringify(arr))



})

function displaytaskss() {
    console.log(listdata);
    let output = ""
    let displaytask = document.getElementById('displaytasks')

    listdata.forEach((tasks, index) => {
        output += `
                <tr>
                        <td>${index + 1}</td>
                        <td>${tasks.tasktitle}</td>
                        <td>${tasks.taskduedate}</td>
                        <td>${tasks.taskdesc}
                        </td>
                        <td>${tasks.taskPriority}</td>
                        <td><button onclick="deletetask(${index})" class="btn btn-danger">Delete</button></td>
                        <td><button onclick="edittask(${index})" class="btn btn-info">Upadte</button></td>
                </tr>

        `
        displaytask.innerHTML = output
    })
}

displaytaskss()

function deletetask(index){
    if(confirm("do you want to delete this task")){
        listdata.splice(index,1)
        localStorage.setItem('tasklist', JSON.stringify(listdata))
        displaytaskss()
    }

}

function edittask(index){
    document.querySelector('#add').style.display="none"
    document.querySelector('#update').style.display="block"

    const singledata=listdata[index]

    
    const tasktitle = document.querySelector('#tasktitle')
    const taskduedate = document.querySelector('#taskduedate')
    const taskdesc = document.querySelector('#taskdesc')
    const taskPriority = document.querySelector('#taskPriority')

    tasktitle.value=singledata.tasktitle
    taskduedate.value=singledata.taskduedate
    taskdesc.value=singledata.taskdesc
    taskPriority.value=singledata.taskPriority

    document.querySelector('#update').addEventListener("click",()=>{
        const newtask={
            tasktitle:tasktitle.value,
            taskduedate:taskduedate.value,
            taskdesc:taskdesc.value,
            taskPriority:taskPriority.value

        }
        // console.log(newtask);
        listdata.splice(index,1,newtask)
        localStorage.setItem('tasklist', JSON.stringify(listdata))
        displaytaskss()

        
    })

   
}

function clearForm() {
    document.getElementById("taskForm").reset();
}