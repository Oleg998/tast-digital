import"./assets/menu-7de33117.js";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector("#phone"),o=window.intlTelInput(t,{initialCountry:"auto",geoIpLookup:function(n){fetch("https://ipinfo.io?token=d37d4a3994d8a5").then(function(e){return e.json()}).then(function(e){n(e.country)}).catch(function(){n("US")})},utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"});document.getElementById("callback").addEventListener("submit",function(n){n.preventDefault(),o.isValidNumber()?window.location.href="./thankYou.html":console.error("Invalid phone number")})});const i=document.getElementById("callback"),c=document.querySelectorAll("a, button");c.forEach(t=>{t.addEventListener("click",function(o){!t.classList.contains("menu-btn-back")&&!t.classList.contains("form-btn")&&(o.preventDefault(),i.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=commonHelpers.js.map
