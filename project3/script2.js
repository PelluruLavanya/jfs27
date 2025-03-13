

let heroines=[{NAME:"SAIPALLAVI",AGE:23,MOVIE:"FIDAA"},
    {NAME:"KAJAL",AGE:30,MOVIE:"MAGADHEERA"},
    {NAME:"ANUSHKA",AGE:30,MOVIE:"KHALEJA"},
    {NAME:"SAMANTHA",AGE:33,MOVIE:"A AA"},
    {NAME:"NITHYAMEENAN",AGE:35,MOVIE:"ISHQ"}
];

function getData1()
{
    let tr="";
    let ele=document.getElementById("displayDetails1");
    for(let val of heroines)
    {
        tr=tr+`
            <tr>
                <td>${val.NAME}</td>
                <td>${val.AGE}</td>
                <td>${val.MOVIE}</td>
            </tr>
        `
    }
    let table1=`
    <table border="1px">
       <tr>
           <th>NAME</th>
           <th>AGE</th>
           <th>MOVIE</th>
        </tr>
        ${tr}
    </table>
    `
    
ele.innerHTML=table1;
}