import { MainNews } from "./main/News.js"
import { MainGames } from "./main/Games.js"

export const Home = ({ pages }) => {
    const [lol, easport, noticias] = [...pages]

    return `
		${MainNews({noticias: noticias})}
		${MainGames({games: [lol, easport]})}
	`
}