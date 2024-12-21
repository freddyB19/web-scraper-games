import { EasportNav } from "@easport/components/nav.js"
import { CurrentPage } from "@root/utils/currentPage.js"
import { UIEasportNovently } from "@easport/components/ui.js"

import easportLogo from "@easport/components/logo2.svg"


const Novelty = ({news}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center my-5">Novedades</h2>

		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2"> 
			${UIEasportNovently({news: news})}
		</section>
	</div>
	`
}


export const EasportNovelty = ({pages}) => {
	const easport = pages.find(page => page.pagina.nombre == 'easport')


	return `
	${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport novedades'})}


	${EasportNav({})}

	${Novelty({news: easport.pagina.info.novedades})}

	`
}