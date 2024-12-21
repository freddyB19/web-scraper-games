import { EasportNav } from "@easport/components/nav.js"
import { CurrentPage } from "@root/utils/currentPage.js"
import { UIEasportUpdate } from "@easport/components/ui.js"

import easportLogo from "@easport/components/logo2.svg"


const Updates = ({news}) => {
	const etiquetas = news[0].etiqueta

	const dataControl = etiquetas.map(note => note.etiqueta)

	return `
	<div class="mt-5">
		<h2 class="display-4 text-center my-5">Actualizaciones</h2>

		<section>
			<div uk-filter="target: .js-filter">

				<ul class="uk-subnav uk-subnav-pill justify-content-between justify-content-md-center">
					<li class="uk-active" uk-filter-control><a href="#">All</a></li>
					${dataControl.map((value) =>`
						<li uk-filter-control="[data-color='${value}']"><a href="#">${value}</a></li>
					`).join('')}
			    </ul>
			    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 js-filter">
					${etiquetas.map(note => 
						`
							${note.info.map(data =>
							`
							${UIEasportUpdate({note: {...note, ...data}})}
							`
							).join('')}
							
						`
					).join('')}
				</div>
			</div>

		</section>
	</div>
	`
}

export const EasportUpdates = ({pages}) => {
	const easport = pages.find(page => page.pagina.nombre == 'easport')


	return `
		${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport actualizaciones'})}


		${EasportNav({})}

		${Updates({news: easport.pagina.info.actualizaciones})}
	`
}