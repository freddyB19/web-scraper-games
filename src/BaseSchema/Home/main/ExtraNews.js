import { Article } from "./components/ArticleNews.js"

export const ExtraNews = ({ notes = [] }) => {
    return `
		${notes.map(note =>
			(note.principal == undefined)
			? ``
			: `${Article({note: note.principal, web: note.web})}`
		).join('')}
	`
}