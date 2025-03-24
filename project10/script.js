let key="0aefc82c156848e186c83458251303";


async function getData()
{  
    let city=document.getElementById("cityNameId").value;

    if(city=="")
    {
        alert("please Enter city name");
        return;
    }
    
    let API=`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}`;

    let res=axios.get(API);
    res.then((result) => {
        displayDetails(result);
        getForecastDatails(result);
        // console.log(result)
    })
    res.catch((err) => {
        alert("city name not found")
        console.log(err);
    });

    // document.getElementById("locationDelId").innerHTML=`
    // <h1>hyderabad</h1>
    // <h5>Rain 0<sup>0</sup>C Chance</h5>
    // <h1>37.6<sup>0</sup>C</h1>
    //  `
}
function displayDetails(res)
{
    console.log(res.data)
    let data=res.data;
    document.getElementById("locationDetId").innerHTML=`
    <h1>${data.location.name}</h1>
    <h6 class="mute">${data.location.country}</h6>
    <h1>${data.current.temp_c}<sup>0</sup>C</h1>
     `
    document.getElementById("icon").innerHTML=`
    <img src="${data.current.condition.icon}">
    `
}
function getForecastDatails(res)
{
    let data=res.data.forecast.forecastday[0].hour;
    let forecastEle=document.getElementById("forecastId");
    let cols=data.reduce(function(cols,obj,ind)
    {
        if(ind==6||ind==9||ind==12||ind==15||ind==18||ind==21)
        {             
            let col=`
                 <div class="col-2 center2">
                 <h6>${ind>12?ind-12:ind}:00 ${ind<12?"AM":"PM"}</h6>
                 <img src="${obj.condition.icon}">
                 <h3>${obj.temp_c}</h3>
                 </div>
             `
        cols=cols+col;
        }   
        return cols;

    },"");

forecastEle.innnerHTML=cols;

}


