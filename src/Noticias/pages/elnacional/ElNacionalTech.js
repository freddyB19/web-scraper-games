import { NewsCurrentPage } from "@root/Noticias/components/CurrentPage.js"

import { NotesSecondary, NotePrincipal } from "./components/Notes.js"

export const ElNacionalTech = ({ pages }) => {
    const [lol, easport, noticias] = [...pages]
    const elnacional_tecnologia = noticias.pagina.info.find(news => news.nombre == 'elnacional_tecnologia')

    return `
		<h1 class="display-3 fw-semibold text-center">El Nacional</h1>
		<h2 class="display-6 fst-italic text-center">Tecnología</h2>
		${NewsCurrentPage({section: 'El Nacional (Tecnología)'})}

		${NotePrincipal({note: elnacional_tecnologia.pagina.principal})}
		${NotesSecondary({notes: elnacional_tecnologia.pagina.notas})}
	`
}