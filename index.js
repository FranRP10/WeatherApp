const contenedor = document.querySelector(".contenedor")
const busqueda = document.querySelector(".CajaBusqueda button")
const CajaDelTiempo = document.querySelector(".CajaDelTiempo")
const DetallesTemporales = document.querySelector(".DetallesTemporales")
const Ciudad = document.querySelector(".busqueda-input")




busqueda.addEventListener('click', function(){
    getWeather() 
})

let getWeather = function(){
    let key = '18f111d86a9d24c513180c9f6262cb5e';
    let city_name = Ciudad.value;

    if(city_name =='')
    return;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&units=metric`   
    fetch(url).then((resp)=> resp.json()).then(data => {
        const image = document.querySelector('.CajaDelTiempo img')
        const temperature = document.querySelector('.CajaDelTiempo .temperature')
        const description = document.querySelector('.CajaDelTiempo .description')
        const humidity = document.querySelector('.DetallesTemporales .humidity span')
        const wind = document.querySelector('.DetallesTemporales .wind span')

        switch (data.weather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                    image.src = 'images/rain.png';
                    break;    
            case 'Snow':
                        image.src = 'images/clear.png';
                    break;
            case 'Clouds':
                        image.src = 'images/cloudy.png';
                    break;
            case 'Mist':
                        image.src = 'images/clear.png';
                    break;
            case 'Haze':
                        image.src = 'images/clear.png';
                    break;     
                    
            default:
                image.src = 'images/cloudy.png'                        
        }

        temperature.innerHTML = `${parseInt(data.main.temp)}<span>°</span>`; 
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}km/h`;

    });
}


