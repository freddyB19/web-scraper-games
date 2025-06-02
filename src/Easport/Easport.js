import { CurrentPage } from "@root/utils/currentPage.js"
import easportLogo from "@root/Easport/files/logo.svg"
import { EasportNav } from "./components/EasportNav.js"
import { News } from "./components/News.js"
import { Novelty } from "./components/Novelty.js"
import { CommingSoon } from "./components/CommingSoon.js"
import { FreeGames } from "./components/FreeGames.js"
import { Updates } from "./components/Updates.js"

export const Easport = ({ pages }) => {

    const easport = pages.find(page => page.pagina.nombre == 'easport')

    return `
		${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easports"})}

		${EasportNav({})}
		
		${News({news: easport.pagina.info.noticias})}
		${Novelty({news: easport.pagina.info.novedades})}
		${CommingSoon({news: easport.pagina.info.proximamente})}
		${FreeGames({news: easport.pagina.info.gratuitos})}
		${Updates({news: easport.pagina.info.actualizaciones})}
	`
}