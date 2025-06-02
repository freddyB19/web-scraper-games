import { getHash } from "@root/utils/getHash.js"

import easportLogo from "@root/Easport/files/logo.svg"

const EasportURL = [{
        url: 'easport_noticias',
        info: 'Noticias'
    },
    {
        url: 'easport_novedades',
        info: 'Novedades'
    },
    {
        url: 'easport_actualizaciones',
        info: 'Actulizaciones'
    },
    {
        url: 'easport_juegos',
        info: 'Juegos'
    },

]


const Navbar = ({}) => {
    const page_url = getHash()

    return `
	<ul class="navbar-nav" data-option="nav-underline">
		${EasportURL.map((url) => `
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

export const EasportNav = ({}) => {
    return `
		<nav class="navbar navbar-expand-lg">
		  <div class="container-fluid">
		    <a class="navbar-brand" href="#/easport">
		      <div class="d-flex align-items-center">
				<img src="${easportLogo}" alt="Logo" width="35" height="35" class="d-inline-block align-text-top">
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