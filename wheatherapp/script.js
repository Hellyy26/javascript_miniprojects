const apikey="bbfbd027131c831831b8f5b37a2bd401";
apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbar=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
var weatherimg=document.querySelector(".weather-icon");

async function cheakweather(city) {
    const response=await fetch(apiurl+city +`&appid=${apikey}`);
    let data=await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)   + "°C";
    // document.querySelector(".temp").innerHTML=data.main.temp +"";
    document.querySelector(".humiduty").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h"; 
     
    if(data.weather[0].main=="Clouds"){
        weatherimg.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherimg.src="images/clear.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherimg.src="images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherimg.src="images/rain.png"
    }
    else if(data.weather[0].main=="Humidity"){
        weatherimg.src="images/humidity.png"
    }
    else if(data.weather[0].main=="Snow"){
        weatherimg.src="images/snow.png"
    }

}
searchbtn.addEventListener("click",()=>{
    cheakweather(searchbar.value)
})
// cheakweather();