let lat = 49.24;
let lon = -123.11;

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=e4758280efa11abc4a76bc04de0796e6&units=metric`;

fetch(url, requestOptions)
    .then(response => response.json()) 
    .then(data => {
        console.log(data.list); 
    })
    .catch(error => console.log('error', error));
