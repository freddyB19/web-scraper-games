import { EasportNav } from "@easport/components/nav.js"
import { CurrentPage } from "@root/utils/currentPage.js"
import { UIEasportNews } from "@easport/components/ui.js"

import easportLogo from "@easport/components/logo2.svg"

const News = ({news}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center my-5">Noticias</h2>

		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		${news.map(note =>`
			${UIEasportNews({note: note})}
		`).join('')}
		</section>
	</div>
	`
}

export const EasportNews = ({pages}) => {
	const easport = pages.find(page => page.pagina.nombre == 'easport')

	return `
		${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport noticias'})}

		${EasportNav({})}

		${News({news: easport.pagina.info.noticias})}
	`
}