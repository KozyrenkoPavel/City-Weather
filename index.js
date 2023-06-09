const form = document.querySelector("form");
const city = document.createElement("h1");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  city.innerHTML = "";
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${event.target.text.value}&appid=0ad3df4030a233c298c8cf93b05395a7&lang=ru`;

  const setWeather = async function () {
    try {
      let response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Не верный URL");
      }

      let weatherByCity = await response.json();

      event.target.text.value = "";

      city.textContent = `Погогода в городе ${weatherByCity.name}: ${weatherByCity.weather[0].description}`;

      document.body.append(city);
    } catch {
      alert("Такого города нет");
      console.error("Ошибка");
    } finally {
      console.log("finally");
    }
  };

  setWeather();
});
