import { NewsCurrentPage } from "@root/Noticias/components/CurrentPage.js"
import {
    NotesSecondary,
    NotesShortSecondary,
    NotePrincipal
} from "./components/Notes.js"

export const DecryptIA = ({ pages }) => {
    const [lol, easport, noticias] = [...pages]

    const decrypt_ia = noticias.pagina.info.find(news => news.nombre == 'decrypt_ia')

    return `
		<h1 class="display-3 fw-semibold text-center">Decrypt</h1>
		<h2 class="display-6 fst-italic text-center">IA</h2>
		${NewsCurrentPage({section: 'Decrypt (IA)'})}

		${NotePrincipal({note: decrypt_ia.pagina.principal})}

		${NotesShortSecondary({notes: decrypt_ia.pagina.notas.cortas})}
		${NotesSecondary({notes: decrypt_ia.pagina.notas.extensas})}


	`
}