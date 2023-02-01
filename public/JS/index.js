console.log("running");
const searchButton = document.querySelector("form");
const address = document.querySelector("input");
const temperature = document.querySelector(".temp");
const locationDetails = document.querySelector(".location");
const weaterDeatils = document.querySelector(".overall");
const Humadity = document.querySelector(".Humadity");
const Cloudcover = document.querySelector(".Cloudcover");
const Feelslike = document.querySelector(".Feelslike");
const Visibility = document.querySelector(".Visibility");
const Observation = document.querySelector(".Observation");
const formControl = document.querySelector(".form__container");

let address__details;

address.addEventListener("input", (e) => {
  e.preventDefault();
  address__details = e.target.value;
});

searchButton.addEventListener("submit", (e) => {
  e.preventDefault();
  formControl.innerHTML = `
  <h1>Loading....</h1>
  `;
  const URL = `http://localhost:3000/weather?address=${address__details}`;
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        formControl.innerHTML = `
        <form>
              <input
                type="text"
                id="address_input"
                placeholder="Enter the Address"
              />
              <button type="submit">🔍</button>
            </form>
       `;
        temperature.innerHTML = `
      ${data.data.current__weater.temperature}<sup>o</sup>
      `;
        locationDetails.textContent = `${data.data.location.name}`;
        weaterDeatils.textContent = `${data.data.current__weater.weather_descriptions[0]}`;
      }
      Humadity.textContent = `${data.data.current__weater.humidity}`;
      Cloudcover.textContent = `${data.data.current__weater.cloudcover}`;
      Feelslike.textContent = `${data.data.current__weater.feelslike}`;
      Visibility.textContent = `${data.data.current__weater.visibility}`;
      Observation.textContent = `${data.data.current__weater.observation_time}`;
    });
});

// searchButton.addEventListener("submit", (event) => {
//   event.preventDefault();
//   weatherForecast.innerHTML = `
//   <h1>Loading....</h1>
//   `;
//   const address = document.querySelector("input").value;
//   const URL = `http://localhost:3000/weather?address=${address}`;
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       if (data.error) {
//         console.log(data.error);
//         weatherForecast.innerHTML = `
//           <h1> ${data.error} </h1>
//           `;
//       } else {
//         weatherForecast.innerHTML = `
//         <h1> ${data.location} </h1>
//         <h2> ${data.forecast} </h2>
//         `;
//       }
//     });
// });
