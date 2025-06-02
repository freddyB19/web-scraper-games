import lolLogo from "@root/LOL/files/logo.svg"
import { CurrentPage } from "@root/utils/currentPage.js"
import { LOLNav } from "@root/LOL/components/LOLNav.js"
import { URLPatterns } from "@root/LOL/components/URLPatterns.js"
import { NewsAndNotes } from "@root/LOL/components/NewsAndNotes.js"

export const LOLNews = ({ pages }) => {
    const lol = pages.find(page => page.pagina.nombre == 'lol')

    return `

		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({ urls: lol.pagina.info })}

		${NewsAndNotes({
			info: lol.pagina.info.noticias, 
			title: "Noticias", 
			url: URLPatterns.noticias,
			show: false
	})}
	`
}

export const LOLNotes = ({ pages }) => {
    const lol = pages.find(page => page.pagina.nombre == 'lol')

    return `
		${CurrentPage({logo: lolLogo, logo_w: "70", page: "League of Legends", section: 'LOL'})}

		${LOLNav({ urls: lol.pagina.info })}

		${NewsAndNotes({
			info: lol.pagina.info.notas, 
			title: "Notas de la versión", 
			url: URLPatterns.notas,
			show: false
	})}
	`
}