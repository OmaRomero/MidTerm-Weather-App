import fetch from 'node-fetch';

let lat = 49.24;
let lon = -123.11;
let apiKey = 'decf2899fac789ab273d18b808b7a5d5';

const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.list);
    })
    .catch(error => console.error('Error fetching data:', error));
