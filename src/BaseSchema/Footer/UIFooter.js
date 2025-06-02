import githubLogo from "./files/github.svg"
import linkedinLogo from "./files/linkedin.svg"
import usuarioLogo from "./files/usuario.svg"

export const UIFooter = ({}) => {
    return `
	<footer class="py-3 my-4">
	    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
	      <li class="nav-item me-3">
			<a class="text-body-secondary" href="https://github.com/freddyB19" target="_blank">
				<img src="${githubLogo}" alt="Github de Freddy Bolívar">
	      	</a>
	      </li>
	      <li class="nav-item me-3">
			<a class="text-body-secondary" href="http://linkedin.com/in/freddy-bolivar-backend645" target="_blank">
				<img src="${linkedinLogo}" alt="Perfil de LinkedIn de Freddy Bolívar">
	      	</a>
	      </li>
	    </ul>
	    <div class="d-flex justify-content-center align-items-center">
	      <a href="https://portafolio-uiib.onrender.com/" target="_blank" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
	        <img src="${usuarioLogo}" alt="Portafolio web de Freddy">
	      </a>
	      <span class="mb-3 mb-md-0"><a class="text-body-secondary text-decoration-none" href="https://portafolio-uiib.onrender.com/" target="_blank">© 2024 Bolívar, Freddy</a></span>
	    </div>
	</footer>
	`
}