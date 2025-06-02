import { EasportNav } from "@root/Easport/components/EasportNav.js"
import easportLogo from "@root/Easport/files/logo.svg"

import { CurrentPage } from "@root/utils/currentPage.js"
import { FreeGames } from "./components/FreeGames.js"

export const EasportFreeGames = ({ pages }) => {
    const easport = pages.find(page => page.pagina.nombre == 'easport')

    return `
	${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport juegos'})}

	${EasportNav({})}
	${FreeGames({news: easport.pagina.info.gratuitos})}
	`
}