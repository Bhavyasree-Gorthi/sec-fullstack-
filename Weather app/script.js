// Simple Example: JSON Basics

//let books = [
 // { title: "The Alchemist", author: "Paulo Coelho", price: 350 },
  //{ title: "Atomic Habits", author: "James Clear", price: 420 },
  //{ title: "1984", author: "George Orwell", price: 280 }
//];

// Convert object → JSON string
//let jsonString = JSON.stringify(books);
//console.log("JSON String:", jsonString);

// Convert JSON string → object
//let parsedBooks = JSON.parse(jsonString);
//console.log("Parsed Object:", parsedBooks);

//fetch("https://jsonplaceholder.typicode.com/users/")
  //.then(res => res.json())
  //.then(users => {
    //let output = "Users List:\n";
    //users.forEach(user => {
     // output += `${user.name} - ${user.email}\n`;
    //});
    //document.body.innerHTML += output;
 // });

// Weather Info Fetcher project

//console.log("Weather Info Fetcher");

//predefined city -> coodinates

//
const cityCoords = {
  "delhi": { lat: 28.6139, lon: 77.209 },
  "mumbai": { lat: 19.076, lon: 72.8777 },
  "chennai": { lat: 13.0827, lon: 80.2707 },
  "london": { lat: 51.5074, lon: -0.1278 },
  "new york": { lat: 40.7128, lon: -74.006 },
};

// Event listener
document.getElementById("fetchButton").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

  if (!cityCoords[city]) {
   
    document.getElementById("weatherResult").innerHTML = "City not in the list.";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch API
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weatherResult").innerHTML = `
          <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
          <p>Temperature: ${data.current_weather.temperature}°C</p>
          <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
          <p>Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = "No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weatherResult").innerHTML = "Error fetching weather data.";
    });
});
