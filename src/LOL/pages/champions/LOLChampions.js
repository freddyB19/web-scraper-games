import lolLogo from "@root/LOL/files/logo.svg"
import { LOLNav } from "@root/LOL/components/LOLNav.js"
import { Champions } from "@root/LOL/components/Champions.js"

import { CurrentPage } from "@root/utils/currentPage.js"

export const LOLChampions = ({ pages }) => {
    const lol = pages.find(page => page.pagina.nombre == 'lol')

    return `
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({ urls: lol.pagina.info })}
		${Champions({champions: lol.pagina.info.champions, show: false})}
	`
}