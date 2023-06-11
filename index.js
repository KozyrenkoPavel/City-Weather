const form = document.querySelector('form');
const weatherByCity = document.createElement('h1');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${event.target.text.value}&appid=0ad3df4030a233c298c8cf93b05395a7&lang=ru`;

  weatherByCity.innerHTML = '';

  const setWeather = async function () {
    try {
      let response = await fetch(URL);

      if (!response.ok) {
        throw new Error('Введите корректное название города!');
      }

      let infoCity = await response.json();

      event.target.text.value = '';

      weatherByCity.textContent = `Погода в городе ${infoCity.name}: ${infoCity.weather[0].description}`;

      document.body.append(weatherByCity);
    } catch (error) {
      if (event.target.text.value === '') {
        alert('Введите пожалуйста название города!');
      } else {
        alert(error);
      }

      console.error('Ошибка');
    }
  };

  setWeather();
});
