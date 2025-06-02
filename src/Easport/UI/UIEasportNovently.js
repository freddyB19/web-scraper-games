import { UICard } from "./UICard.js"

export const UIEasportNovently = ({ news }) => {
    return `
	${UICard({news: news})}
	`
}