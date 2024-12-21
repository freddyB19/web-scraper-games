import { getHash } from "@root/utils/getHash.js"
import lolLogo from "./lol.svg"

export const urlpatterns = {
	champions: 'lol_champions',
	estadisticas: 'lol_estadisticas',
	noticias: 'lol_noticias',
	notas: 'lol_notas',
}

const LOLURL = [
	{
		url: 'lol_champions',
		info: 'Campeones'
	},
	{
		url: 'lol_estadisticas',
		info: 'Estadísticas'
	},
	{
		url: 'lol_noticias',
		info: 'Noticias'
	},
	{
		url: 'lol_notas',
		info: 'Notas'
	},

]

const Navbar= ({}) => {
	const page_url = getHash()

	return `
	<ul class="navbar-nav" data-option="nav-underline">
		${LOLURL.map((url) => `
			<li class="nav-item">
				${
					(page_url == url.url)
					?`<a class="nav-link active" aria-current="page" href="#/${url.url}">${url.info}</a>`
					:`<a class="nav-link" href="#/${url.url}">${url.info}</a>`
				}
			</li>
		`).join('')}
	</ul>

	`
}

export const LOLNav = ({}) => {
	return `
		<nav class="navbar navbar-expand-lg">
		  <div class="container-fluid">
		    <a class="navbar-brand" href="#/lol">
		      <div class="d-flex align-items-center">
				<img src="${lolLogo}" alt="Logo" width="25" height="25" class="d-inline-block align-text-top">	      	
		      </div>
		    </a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
			<div class="collapse navbar-collapse justify-content-md-end" id="navbarTogglerDemo01">
				${Navbar({})}
		    </div>
		    
		  </div>
		</nav>

	`
}
