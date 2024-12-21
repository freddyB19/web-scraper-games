import {getHash} from "@root/utils/getHash.js"

import { MaxWidth } from "@root/utils/values.js"

const Icons = {
	lol: `<span class="material-symbols-outlined">swords</span>`,
	easport: `<span class="material-symbols-outlined">sports_esports</span>` ,
	noticias: `<span class="material-symbols-outlined">newsmode</span>` ,
}

const URLpatterns = {
	"marca": 'Marca',
	"lanacion": 'La Nación',
	"decrypt_tecnologia": 'Decrypt (Tecnología)',
	'decrypt_ia': 'Decrypt (IA)',
	'elnacional_tecnologia': 'El Nacional (Tecnología)',
	'elnacional_ia': 'El Nacional (IA)',
}


const TNav = ({urls}) => {

	return `
		<nav class="uk-navbar-container" uk-navbar="${(screen.width <= MaxWidth) ? 'mode: click' : "dropbar: true"}">
		    <div class="uk-navbar-center">

		        <ul class="uk-navbar-nav">
		            <li class="uk-active">
			            <a href="/">
			            	<span class="material-symbols-outlined">home_app_logo</span>
			            	<span class="nav-text">Inicio</span>	
			            </a>
		            </li>

					${
						urls.map((page) =>
							`
							<li>

								<a href="#/${page.name}">
									${Icons[page.name]}
									<span class="nav-text">${page.name.replace(page.name.charAt(), page.name.charAt().toUpperCase())} </span>
									${(page.urls) ? `<span uk-navbar-parent-icon></span>`: ''}
								</a>
								${
									(page.urls)
									?
									`<div class="uk-navbar-dropdown">
										<ul class="uk-nav uk-navbar-dropdown-nav">
											${
												page.urls.map(news => 
													`<li><a href="#/${news}">${URLpatterns[news]}</a></li>`
												).join('')
											}
										</ul>
									</div>
									`
									: ''
								}
							</li>`
						).join('')
					}
		        </ul>

		    </div>
		</nav>

	`
}



export const Nav = ({urls}) => {


	return `
		${TNav({urls})}


	`
}