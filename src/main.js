
import './style.css'

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 

//Importando UIkit
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';


import { Routes } from './routes/main.js'

window.addEventListener('load', async () => {
  
  document.querySelector("#app").innerHTML = `
  <div class="container">
    ${await Routes({})}
  </div>
  `
})

window.addEventListener('hashchange', async () => {
  document.querySelector("#app").innerHTML = `
  <div class="container">
    ${await Routes({})}
  </div>
  `

  setTimeout(async () =>{
      const scroll = document.querySelector("body");

      await window.scrollTo({
        top: scroll.offsetTop,
        behavior: "smooth"
      })
    }, 110);
})

