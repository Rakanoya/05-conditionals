// Get the form and suggestion section from the page
const form = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Listen for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the selected weather value
  const weatherSelect = document.getElementById('weather');
  const weather = weatherSelect.value;

  // Get the temperature value from the input
  const temperatureInput = document.getElementById('temperature');
  const temperature = Number(temperatureInput.value);

  // Create a variable for the suggestion message
  let message = '';

  // Check the weather and set the message
  if (weather === 'cloudy' || weather === 'rainy') {
    // Suggest a light jacket for cloudy or rainy weather
    message = `It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === 'sunny') {
    // Suggest sunglasses and sunscreen for sunny weather
    message = `It's sunny! 😎 Don't forget your sunglasses and sunscreen. 🧴`;
  } else if (weather === 'snowy') {
    // Suggest warm clothes and boots for snowy weather
    message = `It's snowy! ❄️ Wear warm clothes and boots. 🧣🧤🥾`;
  } else if (weather === 'windy') {
    // Suggest a windbreaker for windy weather
    message = `It's windy! 💨 A windbreaker will help. 🧥`;
  } else {
    // If no weather is selected
    message = `Please select the weather above.`;
  }

  // If the temperature is below 50°F, add a warm jacket suggestion
  if (temperature < 50) {
    // Add a line break and warm jacket suggestion
    message += ` <br>It's chilly! Wear a warm jacket. 🧥`;
  }

  // Show the suggestion message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
