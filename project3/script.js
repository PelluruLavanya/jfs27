

let heros=[{NAME:"PAVAN KALYAN",AGE:50,MOVIE:"SARDHAAR GABBAR SINGH"},
    {NAME:"ALLU ARJAN",AGE:40,MOVIE:"PUSHPA2"},
    {NAME:"MAHESH BABU",AGE:60,MOVIE:"SARILERU NIKEVVARU"},
    {NAME:"VARUN TEJ",AGE:30,MOVIE:"FIDAA"},
    {NAME:"VENKATESH",AGE:65,MOVIE:"E SANKRANTHI KI VASTHUNNAM"}
];

function getData()
{
    let tr="";
    let ele=document.getElementById("displayDetails");
    for(let val of heros)
    {
        tr=tr+`
            <tr>
                <td>${val.NAME}</td>
                <td>${val.AGE}</td>
                <td>${val.MOVIE}</td>
            </tr>
        `
    }
    let table=`
    <table border="1px">
       <tr>
           <th>NAME</th>
           <th>AGE</th>
           <th>MOVIE</th>
        </tr>
        ${tr}
    </table>
    `
    
ele.innerHTML=table;
}

