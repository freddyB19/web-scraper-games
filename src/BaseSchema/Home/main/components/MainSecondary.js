import { ManagerUI } from "@root/Noticias/pages/marca/UI/UIMarca.js"

export const MainSecondary = ({ notes }) => {
    const mainNotes = notes.slice(0, 3)

    return `
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		${mainNotes.map((note) =>`
			${ManagerUI({note: note})}
		`).join('')}
		
	</div>
	`
}