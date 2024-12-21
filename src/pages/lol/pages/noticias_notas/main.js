import lolLogo from "@lol/components/lol.svg"
import { NewsAndNotes } from "@lol/components/news_notes.js"
import { urlpatterns, LOLNav } from "@lol/components/nav.js"

import { CurrentPage } from "@root/utils/currentPage.js"


export const LOLNews = ({pages}) => {
	const lol = pages.find(page => page.pagina.nombre == 'lol')
	
	return `

		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({})}

		${NewsAndNotes({
			info: lol.pagina.info.noticias, 
			title: "Noticias", 
			url: urlpatterns.noticias,
			show: false
	})}
	`
}

export const LOLNotes = ({pages}) => {
	const lol = pages.find(page => page.pagina.nombre == 'lol')
	
	return `
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({})}

		${NewsAndNotes({
			info: lol.pagina.info.notas, 
			title: "Notas de la versión", 
			url: urlpatterns.notas,
			show: false
	})}
	`
}