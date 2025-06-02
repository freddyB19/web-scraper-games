import { NewsGamesLol } from "./components/NewsGamesLol.js"
import { NewGamesEasport } from "./components/NewGamesEasport.js"

export const MainGames = ({ games = [] }) => {
    const [lol, easport] = [...games]

    return `
		${NewsGamesLol({news: lol.pagina.info.noticias, notes: lol.pagina.info.notas})}
		${NewGamesEasport({
			novelty: easport.pagina.info.novedades, 
			updates: easport.pagina.info.actualizaciones
		})}
	`
}