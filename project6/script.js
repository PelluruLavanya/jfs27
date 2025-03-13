let ToDO =[
    {task:'Breakfast',time:'08:00'},
    {task:'Java class',time:'10:00'},
    {task:'Front-End class',time:'01:30'},
    {task:'Dinner',time:'08:00'}

];
const display=()=>{
    let total;
    let value = ""
    let id =0
    if(ToDO.length==0){
        // value = 'list is empty'
        total=`<h1>List is empty</h1>`
        document.getElementById('display').innerHTML=total
    }else{
     value = ToDO.reduce((acc,val,ind)=>{ 
            let tr = `
             <tr>
                <td>${++id}</td>
                <td>${val.task}</td>
                <td>${val.time}</td>
                <td><button onclick="deleteItem(${ind})">delete</button></td>
                <td><button onclick="editItem(${ind})">edit</button></td>
             </tr> 
            `
            acc+=tr
            return acc;
       },'')
       total = `
         <tr>
            <th>No</th>
            <th>Task</th>
            <th>Time</th>
            <th colspan="2">Action</th>
        </tr>
    ${value}
        `
        document.getElementById('display').innerHTML=total
        document.getElementById('editBtn').style.display='none'
    }
   
}
const clearInputs=()=>{
    document.getElementById('task').value=''
    document.getElementById('time').value=''
}
display();
const Add = ()=>{
    
    let taskV = document.getElementById('task').value
    let timeV = document.getElementById('time').value
    if(taskV==""||timeV==""){
        alert('Fields are empty')
    }else{
    let obj = {
        task:taskV,
        time:timeV
    }
    ToDO.push(obj)
    display()
    clearInputs();
}
}
const clearAll=()=>{
    ToDO=[];
    display()
}
const deleteItem=(ind)=>{
    ToDO.splice(ind,1)
    display()
    
}
const editItem=(id)=>{
    document.getElementById('add').style.display='none'
    document.getElementById('editBtn').style.display='block'
   let taskEle = document.getElementById('task')
   let timeEle = document.getElementById('time')
   let task = ToDO.find((val,ind)=>{
        if(ind==id){
            return val
        }
   })
   if(task){
    taskEle.value=task.task
    timeEle.value = task.time
   }
   let Edit= document.getElementById('editBtn').addEventListener('click',()=>{
        edit(id)
   })
}
const edit = (id)=>{
    
    let taskV = document.getElementById('task').value
   let timeV = document.getElementById('time').value
   console.log(taskV,timeV)
    let task = ToDO.find((val,ind)=>{
        if(ind==id){
            return ind
        }
    })
    if(task){
        task.task=taskV
        task.time=timeV
    }
    display()
    alert("Updated Successfully")
    clearInputs()
    document.getElementById('add').style.display='block'

}








