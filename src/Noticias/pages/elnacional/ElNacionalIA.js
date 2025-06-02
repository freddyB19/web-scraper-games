import { NewsCurrentPage } from "@root/Noticias/components/CurrentPage.js"

import { NotesSecondary, NotePrincipal } from "./components/Notes.js"

export const ElNacionalIA = ({ pages }) => {
    const [lol, easport, noticias] = [...pages]
    const elnacional_ia = noticias.pagina.info.find(news => news.nombre == 'elnacional_ia')

    return `
		<h1 class="display-3 fw-semibold text-center">El Nacional</h1>
		<h2 class="display-6 fst-italic text-center">Inteligencia Artificial</h2>
		${NewsCurrentPage({section: 'El Nacional (IA)'})}

		${NotePrincipal({note: elnacional_ia.pagina.principal})}
		${NotesSecondary({notes: elnacional_ia.pagina.notas})}
	`
}