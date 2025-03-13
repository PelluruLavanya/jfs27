let Ministers=[
    { id:1,name: "Narendra modi", age:74, salary:200000},
    { id:2,name: "Shri Rajnath Singh", age:73,salary:250000},
    { id:3,name: "Shri Nitin Jairam Gadkari", age:67, salary:300000},
    { id:4,name: "Smt. Nirmala Sitharaman", age:65, salary:350000},
    { id:5,name: "Shri Shivraj Singh Chouhan", age:63, salary:400000},
];
 

function display()
{
    
    let returnVal = Ministers.reduce(function(acc,obj,id)
    {
        let tr=`                                     
        <tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.age}</td>
            <td>${obj.salary}</td>
            <td><button onclick="deleteMinisters(${id});"> Delete </button></td>
            <td><button onclick="editMinisters(${id});"> edit</button></td>
        </tr>
         `
        acc=acc+tr;
        return acc;
    },"")
    let table=`
    <tr>
        <th>id</th>
        <th>name</th>
         <th>age</th>
         <th>salary</th>
         
    </tr>
    ${returnVal}
    `
    

    document.getElementById("details").innerHTML=table;
}
display();


function addMinisters()
{
    let idEle=document.getElementById("id");
    let NameEle=document.getElementById("name");
    let ageEle=document.getElementById("age");
    let salaryEle=document.getElementById("salary");
    let name=NameEle.value;
    let age =ageEle.age;
    let salary=salaryEle.salary;
    let id=idEle.id;
    let obj ={
        name:name,
        age:age,
        salary:salary,
        id:id
    }
    
    Ministers.push(obj);
    display();
}



function deleteMinisters(id)
{
    Ministers.splice(id,1);
    display();
}

function editMinisters(id)
{
   document.getElementById("addBtn").style.display="none";
   let nameEle= document.getElementById("name");
   let ageEle= document.getElementById("age");
   let salaryEle= document.getElementById("salary");
   let idEle= document.getElementById("id");

   let indEle = document.getElementById("id");
   indEle.innerText=id;
   let obj=Ministers[id];
   nameEle.value=obj.name;
   ageEle.value=obj.age;
   salaryEle.value=obj.salary;
   idEle.value=obj.id;
}

function edit()
{
    let indEle=document.getElementById("id");
    let ind=indEle.innerText;
    let nameEle = document.getElementById("name");
    let ageEle = document.getElementById("age");
    let salaryEle=document.getElementById("salary");
    let idEle= document.getElementById("id");
    let name=nameEle.value;
    let age=ageEle.value;
    let salary=salaryEle.value;
    let id=idEle.value;
    let obj={
        name,age,salary,id
    }
    Ministers[Number(id)]=obj;
    display();

}
