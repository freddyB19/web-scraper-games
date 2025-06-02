import { ManageUI } from "./UI/UILaNacion.js"

export const NewsLaNacion = ({ news }) => {
    return `
	${news.pagina.map( note =>
		`${ManageUI({note})}`
	).join('')}
	`
}