function getWeather() {
  return new Promise((resolve, error) => {
    setTimeout(() => {
      return resolve("Cloudy");
      //   return error("API Call failed");
    }, 1000);
  });
}

function addEmoji(res) {
  switch (res) {
    case "Sunny":
      return "Sunny ☀️";
      break;
    case "Cloudy":
      return "Cloudy ☁️";
    case "Rainy":
      return "Rainy 🌧️";
    default:
      break;
  }
}

getWeather()
  .then((res) => addEmoji(res))
  .then((res) => console.log(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
