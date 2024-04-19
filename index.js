function fiveDayForecast(latitude, longitude) {
  if (latitude === null || longitude === null || latitude === undefined || longitude === undefined) {
      latitude = 49.2827;
      longitude = -123.1207;
  }

  let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=ee91f48f66a841405d687e689915dd56&units=metric`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const dailyForecasts = data.list.filter((item, index) => index % 8 === 0);

          dailyForecasts.forEach((forecast, index) => {
              const { dt, main, weather } = forecast;
              const date = new Date(dt * 1000);
              const day = date.toLocaleDateString("en-US", { weekday: "short" });
              const { temp_min, temp_max } = main;
              const { icon } = weather[0];

              const card = document.querySelector(`#FiveDayForecast .card:nth-child(${index + 1})`);
              const [dayEl, iconEl, minTempEl, maxTempEl] = card.children;

              dayEl.textContent = day;
              iconEl.src = `https://openweathermap.org/img/wn/${icon}.png`;
              minTempEl.textContent = `Min: ${Math.round(temp_min)}°C`;
              maxTempEl.textContent = `Max: ${Math.round(temp_max)}°C`;
          });
      });
}
