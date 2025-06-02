import { NewsCurrentPage } from "@root/Noticias/components/CurrentPage.js"
import {
    NotesSecondary,
    NotesShortSecondary,
    NotePrincipal
} from "./components/Notes.js"


export const DecryptTechnology = ({ pages }) => {
    const [lol, easport, noticias] = [...pages]

    const decrypt_tecnologia = noticias.pagina.info.find(news => news.nombre == 'decrypt_tecnologia')

    return `
		<h1 class="display-3 fw-semibold text-center">Decrypt</h1>
		<h2 class="display-6 fst-italic text-center">Tecnología</h2>
		${NewsCurrentPage({section: 'Decrypt (Tecnología)'})}

		${NotePrincipal({note: decrypt_tecnologia.pagina.principal})}

		${NotesShortSecondary({notes: decrypt_tecnologia.pagina.notas.cortas})}
		${NotesSecondary({notes: decrypt_tecnologia.pagina.notas.extensas})}

	`
}