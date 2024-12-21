import { LOLNav, urlpatterns } from "./components/nav.js"
import { Champions } from "./components/champions.js"
import { Statistics } from "./components/statistics.js"
import { NewsAndNotes } from "./components/news_notes.js"
import lolLogo from "./components/lol.svg"




import { CurrentPage } from "@root/utils/currentPage.js"

export const LOL = ({pages}) => {
	const lol = pages.find(page => page.pagina.nombre == 'lol')

	return `
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends"})}
		${LOLNav({})}
		${Champions({champions: lol.pagina.info.champions.slice(0, 4)})}
		${Statistics({champions: lol.pagina.info.estadisticas.slice(0, 4)})}
		${NewsAndNotes({info: lol.pagina.info.noticias.slice(0, 3), title: "Noticias", url: urlpatterns.noticias})}
		${NewsAndNotes({info: lol.pagina.info.notas.slice(0, 3), title: "Notas", url: urlpatterns.notas})}
	`
}