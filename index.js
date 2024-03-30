
const btn=document.getElementById('searchBtn');
const cityName=document.getElementById('cityName');
const API_key= 'bb5299cb84c6e001edae186e78365be9';

async function fetchData(city){
    try{  console.log("cityName", city)
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    let result=await res.json();
    console.log(result)
    displayWeather(result)
}
catch(error){console.error();

}
  
}



btn.addEventListener('click' ,() =>{
    alert(cityName.value);
})


function displayWeather({name,main, wind}){
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
      <p>${main.pressure}km/h</p>
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