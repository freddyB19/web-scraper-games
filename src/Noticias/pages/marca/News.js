import { ManagerUI } from "./UI/UIMarca.js"

export const NewsMarca = ({ news }) => {
    return `
	${news.pagina.map(note => 
		`${ManagerUI({note: note})}`
	 ).join('')}

	`
}