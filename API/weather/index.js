
const uiMaker = (data) => {

    let temp = ` <div>
<p>${data.name},</p>
<h1>${Math.round(data.main.temp)}</h1>
<h2>${data.main.temp_max},${data.main.temp_min}</h2>
</div>`
    document.getElementById("container").innerHTML = temp
}


const getWeather = async (cityname) => {

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=${cityname}&units=metric`)
    let data = await res.json()
    uiMaker(data)
}


const handleData = (e) => {
    e.preventDefault()

    let cityname = document.getElementById("cityname").value
    getWeather(cityname)
}



document.getElementById("city").addEventListener("submit", handleData)















const getWeatherByPosition = async (lat, long) => {

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`)
    let data = await res.json()
    uiMaker(data)
}


// location

const handleLocation = () => {

    navigator.geolocation.getCurrentPosition((position) => {

        let lat = position.coords.latitude

        let long = position.coords.longitude
        getWeatherByPosition(lat, long)
    })


}

document.getElementById("btn").addEventListener("click", handleLocation)


handleLocation()















