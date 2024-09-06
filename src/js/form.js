document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#phone');

  const iti = window.intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: function (callback) {
      fetch('https://ipinfo.io?token=d37d4a3994d8a5')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          callback(data.country);
        })
        .catch(function () {
          callback('US');
        });
    },
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  });

  document
    .getElementById('callback')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      if (iti.isValidNumber()) {
        window.location.href = './thankYou.html';
      } else {
        console.error('Invalid phone number');
      }
    });
});

const callback = document.getElementById('callback');
const elements = document.querySelectorAll('a, button');

elements.forEach(element => {
  element.addEventListener('click', function (e) {
    if (
      !element.classList.contains('menu-btn-back') &&
      !element.classList.contains('form-btn')
    ) {
      e.preventDefault();
      callback.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
