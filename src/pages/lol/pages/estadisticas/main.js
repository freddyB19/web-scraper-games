import lolLogo from "@lol/components/lol.svg"
import { LOLNav } from "@lol/components/nav.js"
import { Statistics } from "@lol/components/statistics.js"

import { CurrentPage } from "@root/utils/currentPage.js"


export const LOLStadistics =({pages}) => {
	const lol = pages.find(page => page.pagina.nombre == 'lol')

	return `
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({})}
		${Statistics({champions: lol.pagina.info.estadisticas, show: false})}
	`
}