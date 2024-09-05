document.addEventListener("DOMContentLoaded", function() {
  const input = document.querySelector("#phone");
  
  const iti = window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
      fetch('https://ipinfo.io?token=d37d4a3994d8a5')
        .then(function(response) { return response.json(); })
        .then(function(data) { callback(data.country); })
        .catch(function() { callback('US'); });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });

  document.getElementById("callback").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (iti.isValidNumber()) {
      window.location.href = "./thankYou.html";
    } else {
      console.error("Invalid phone number");
    }
  });
});;

document.addEventListener('DOMContentLoaded', function() {
  const callback = document.getElementById('callback');
  if (!callback) {
      console.error('Элемент с ID "callback" не найден.');
      return;
  }

  const elements = document.querySelectorAll('a, button');
  const body = document.querySelector('body')
  const burgerMenu = document.getElementById('menu-curtain'); 

      function closeMenu() {         
          burgerMenu.classList.remove("menu-curtain--opened"); 
          body.classList.remove("menu--no-scroll");
               
  }
  elements.forEach(element => {
      if (!element.classList.contains('form-btn')) {
          element.addEventListener('click', function(e) {
              e.preventDefault(); 
              e.stopPropagation();
              callback.scrollIntoView({
                  behavior: 'smooth'
              });

              closeMenu();
             
          });
      }
  });

});

