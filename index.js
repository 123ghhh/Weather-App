
const btn=document.getElementById('searchBtn');
const cityName=document.getElementById('cityName');
const API_key= '65bb6e2dce90c4bd5b82dce8a8857957';

async function fetchData(city){
    cityName.value='';
    try{  console.log("cityName", city)
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    let result=await res.json();
    if(result.message){
        document.getElementById("secondDiv").innerHTML=`<h1>${result.message}</h1>`
    }
    console.log(result)
    displayWeather(result)
}
catch(error){console.error();

}
  
}


async function fetchDataByCoordinates(lati, longi){
    
    try{ 
         console.log(lati, longi)
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_key}&units=metric`)
    let result=await res.json();
    
    if(result.message){
        document.getElementById("secondDiv").innerHTML=`<h1>${result.message}</h1>`
    }
    displayWeather(result);
}
catch(error){console.error();

}
  
}



btn.addEventListener('click' ,() =>{
   fetchData(cityName.value);
})


function displayWeather({name,main,wind}){
div=`<div id="weatherInfo">
<p id="temp">${main.temp}°C</p>
<p id="city">${name}</p>
<div class="otherInfo">
  <div class="wind">    
      <p >Wind</p>
      <p>${wind.speed}km/h</p>
  </div>
  <div class="wind">
      <p>Pressure</p>
      <p>${main.pressure}pa</p>
  </div>
  <div class="wind">
      <p>Humidity</p>
      <p>${main.humidity}%</p>
  </div>
</div>
</div>
`
    document.getElementById('secondDiv').innerHTML=div
}
 document.getElementById("currLoc").addEventListener("click",()=>{
       navigator.geolocation.getCurrentPosition((position)=>{
        let lati=position.coords.latitude;
        let longi=position.coords.longitude;
        fetchDataByCoordinates(lati, longi)
        console.log(lati,longi)

       });
 });