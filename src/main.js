
import './style.css'

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 

//Importando UIkit
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';


import { Routes } from './routes/main.js'

window.addEventListener('load', () => {
  
  document.querySelector("#app").innerHTML = `
  <div class="container">
    ${Routes({})}
  </div>
  `
})

window.addEventListener('hashchange', () => {
  document.querySelector("#app").innerHTML = `
  <div class="container">
    ${Routes({})}
  </div>
  `

  setTimeout(() =>{
      const scroll = document.querySelector("body");

      window.scrollTo({
        top: scroll.offsetTop,
        behavior: "smooth"
      })
    }, 110);
})

