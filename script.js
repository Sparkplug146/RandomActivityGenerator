const button = document.getElementById("jokeBtn");
const category = document.getElementById("jokeCategory");
const setup = document.getElementById("jokeSetup");
const delivery = document.getElementById("jokeDelivery");

button.addEventListener("click", function(){

    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
    category.textContent = "Category: " + data.category;
    if(data.type === "single"){
      setup.textContent = "Joke: " + data.joke;
      delivery.textContent = "";
    } else {
      setup.textContent = "Setup: " + data.setup;
      delivery.textContent = "Delivery: " + statusbar.delivery;
    }
    
  });
})