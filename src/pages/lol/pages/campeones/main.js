import lolLogo from "@lol/components/lol.svg"
import { LOLNav } from "@lol/components/nav.js"
import { Champions } from "@lol/components/champions.js"

import { CurrentPage } from "@root/utils/currentPage.js"


export const LOLChampions = ({pages}) => {
	const lol = pages.find(page => page.pagina.nombre == 'lol')

	return `
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({})}
		${Champions({champions: lol.pagina.info.champions, show: false})}
	`
}