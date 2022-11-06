let lightMode = localStorage.getItem('lightMode'); 

const lightModeToggle = document.querySelector('#light-mode-toggle');

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightMode', 'enabled');
  document.getElementById("ThemeIcon").setAttribute("class", "fas fa-sun")
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightMode', null);
  document.getElementById("ThemeIcon").setAttribute("class", "fa fa-moon")
}


if (lightMode === 'enabled') {
  enableLightMode();
  document.getElementById("ThemeIcon").setAttribute("class", "fas fa-sun")
} else{
  document.getElementById("ThemeIcon").setAttribute("class", "fa fa-moon")
}

lightModeToggle.addEventListener('click', () => {

  lightMode = localStorage.getItem('lightMode'); 
  
  if (lightMode !== 'enabled') {
    enableLightMode(); 
  } else {  
    disableLightMode(); 
  }
});
