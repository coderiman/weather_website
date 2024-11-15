const apiKey = "c5bd6dcac6cd9f5aceec2574b7d615de";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city)
{
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  let cityy = document.querySelector(".city");
  cityy.innerHTML=data.name;
  let temp = document.querySelector(".temp");
  temp.innerHTML=data.main.temp+" °c";
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML=data.main.humidity;
  let wind = document.querySelector(".wind");
  wind.innerHTML=data.wind.speed + " km/h";
  if(data.weather[0].main=="Clouds")
  {
    weatherIcon.src="images/clouds.png"
  }else if(data.weather[0].main=="Clear")
  {
    weatherIcon.src="images/clear.png"
  }
  else if(data.weather[0].main=="drizzle")
    {
      weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="mist")
        {
          weatherIcon.src="images/mist.png"
        }
        else if(data.weather[0].main=="rain")
            {
              weatherIcon.src="images/rain.png"
            }
            else if(data.weather[0].main=="snow")
                {
                  weatherIcon.src="images/snow.png"
                }else if(data.weather[0].main=="hazy")
                    {
                      weatherIcon.src="images/clouds.png"
                    }
}
searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value);})
