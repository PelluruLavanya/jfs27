

let director=[{NAME:"RAJAMOULI",AGE:60,MOVIE:"RRR"},
    {NAME:"TRIVIKRAM",AGE:60,MOVIE:"JALSA"},
    {NAME:"ANIL RAVI PUDI",AGE:30,MOVIE:"F2"},
    {NAME:"HARISHANKAR",AGE:33,MOVIE:"ROBO"},
    {NAME:"ANUDEEP",AGE:35,MOVIE:"JATHIRATNALU"}
];

function getData2()
{
    let tr="";
    let ele=document.getElementById("displayDetails2");
    for(let val of director)
    {
        tr=tr+`
            <tr>
                <td>${val.NAME}</td>
                <td>${val.AGE}</td>
                <td>${val.MOVIE}</td>
            </tr>
        `
    }
    let table2=`
    <table border="1px">
       <tr>
           <th>NAME</th>
           <th>AGE</th>
           <th>MOVIE</th>
        </tr>
        ${tr}
    </table>
    `
    
ele.innerHTML=table2;
}