import easportLogo from "@root/Easport/files/logo.svg"

import { News } from "./components/News.js"
import { CurrentPage } from "@root/utils/currentPage.js"
import { EasportNav } from "@root/Easport/components/EasportNav.js"

export const EasportNews = ({ pages }) => {
    const easport = pages.find(page => page.pagina.nombre == 'easport')

    return `
		${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport noticias'})}

		${EasportNav({})}

		${News({news: easport.pagina.info.noticias})}
	`
}