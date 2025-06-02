import easportLogo from "@root/Easport/files/logo.svg"

import { CurrentPage } from "@root/utils/currentPage.js"
import { Novelty } from "./components/Novelty.js"
import { EasportNav } from "@root/Easport/components/EasportNav.js"


export const EasportNovelty = ({ pages }) => {
    const easport = pages.find(page => page.pagina.nombre == 'easport')

    return `
	${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport novedades'})}


	${EasportNav({})}

	${Novelty({news: easport.pagina.info.novedades})}

	`
}