import { CurrentPage } from "@root/utils/currentPage.js"

import { LOLNav } from "./components/LOLNav.js"
import { URLPatterns } from "./components/URLPatterns.js"
import { Champions } from "./components/Champions.js"
import { Stadistics } from "./components/Stadistics.js"
import { NewsAndNotes } from "./components/NewsAndNotes.js"
import lolLogo from "./files/logo.svg"


export const LOL = ({ pages }) => {
    const lol = pages.find(page => page.pagina.nombre == 'lol')

    return `
    	HOLA
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends"})}
		${LOLNav({ urls: lol.pagina.info })}
		${Champions({champions: lol.pagina.info.champions.slice(0, 4)})}
		${Stadistics({champions: lol.pagina.info.estadisticas.slice(0, 4)})}
		${NewsAndNotes({info: lol.pagina.info.noticias, title: "Noticias", url: URLPatterns.noticias})}
		${NewsAndNotes({info: lol.pagina.info.notas, title: "Notas", url: URLPatterns.notas})}
	`
}