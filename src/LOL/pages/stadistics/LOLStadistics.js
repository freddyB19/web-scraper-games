import lolLogo from "@root/LOL/files/logo.svg"
import { LOLNav } from "@root/LOL/components/LOLNav.js"
import { CurrentPage } from "@root/utils/currentPage.js"

import { Stadistics } from "@root/LOL/components/Stadistics.js"

export const LOLStadistics = ({ pages }) => {
    const lol = pages.find(page => page.pagina.nombre == 'lol')

    return `
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({ urls: lol.pagina.info })}
		${Stadistics({champions: lol.pagina.info.estadisticas, show: false})}
	`
}