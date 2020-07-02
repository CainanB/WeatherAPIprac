$(()=>{

    $('form').submit((e)=>{
        e.preventDefault();
        var state = $('#state').val();
        var city = $('#city').val();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=949e47da5c633330a239053d53c767ee`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.main.temp);
            let description = data.weather[0].description;
            let icon = data.weather[0].icon;
            let kelvin = data.main.temp;
            let degC = kelvin - 273.15;
            let degCInt = Math.floor(degC);
            console.log(degC);
            console.log(degCInt);
    
            let degF = (degC * 1.8) + 32;
            let degFInt = Math.floor(degF);
            console.log(degF);
            console.log(degFInt);
    
            let weatherTemp = document.querySelector('#weatherTemp');
            let weatherDescription = document.querySelector('#weatherDescription');
            let weatherImage = document.querySelector('#weatherImg');
            weatherTemp.textContent = `Current Temperature: ${degFInt}F`
            weatherDescription.textContent = `Current Weather Description: ${description}`
            weatherImage.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
        })
        .catch(error => {
            console.log(error);
        })  

    })
  
        
})