import { Article } from "./components/ArticleNews.js"

export const ExtraNews = ({ notes = [] }) => {

    return `
		${notes.map(note =>
			(note.pagina.principal == undefined)
			? ``
			: `${Article({note: note.pagina.principal, web: note.nombre})}`
		).join('')}
	`
}