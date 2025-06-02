import { getHash } from "@root/utils/getHash.js"
import lolLogo from "@root/LOL/files/logo.svg"

const LOLURL = [{
        url: 'lol_champions',
        info: 'Campeones',
        nav: 'champions'
    },
    {
        url: 'lol_estadisticas',
        info: 'Estadísticas',
        nav: 'estadisticas'
    },
    {
        url: 'lol_noticias',
        info: 'Noticias',
        nav: 'notas'
    },
    {
        url: 'lol_notas',
        info: 'Notas',
        nav: 'noticias'
    },

]

const Navbar = ({ nav_urls }) => {
    const page_url = getHash()

    return `
	<ul class="navbar-nav" data-option="nav-underline">
		${LOLURL.map((url) => `
			${
				(!nav_urls[url.nav])
				? ``
				: `
				<li class="nav-item">
				${
					(page_url == url.url)
					?`<a class="nav-link active" aria-current="page" href="#/${url.url}">${url.info}</a>`
					:`<a class="nav-link" href="#/${url.url}">${url.info}</a>`
				}
				</li>
				`
			}
			
		`).join('')}
	</ul>

	`
}

export const LOLNav = ({ urls }) => {

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
				${Navbar({nav_urls: urls})}
		    </div>
		    
		  </div>
		</nav>

	`
}