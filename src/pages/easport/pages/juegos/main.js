import { EasportNav } from "@easport/components/nav.js"
import easportLogo from "@easport/components/logo2.svg"
import { UIEasportFreeGames } from "@easport/components/ui.js"

import { CurrentPage } from "@root/utils/currentPage.js"

const FreeGames = ({news}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center my-5">Juegos Gratuitos</h2>

		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
			${UIEasportFreeGames({news: news})}
		</section>
	</div>
	`
}

export const EasportFreeGames = ({pages}) => {
	const easport = pages.find(page => page.pagina.nombre == 'easport')

	return `
	${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport juegos'})}

	${EasportNav({})}
	${FreeGames({news: easport.pagina.info.gratuitos})}
	`
}