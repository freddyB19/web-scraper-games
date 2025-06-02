import easportLogo from "@root/Easport/files/logo.svg"

import { EasportNav } from "@root/Easport/components/EasportNav.js"
import { CurrentPage } from "@root/utils/currentPage.js"
import { Updates } from "./components/Updates.js"



export const EasportUpdates = ({ pages }) => {
    const easport = pages.find(page => page.pagina.nombre == 'easport')


    return `
		${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport", section: 'Easport actualizaciones'})}


		${EasportNav({})}

		${Updates({news: easport.pagina.info.actualizaciones})}
	`
}