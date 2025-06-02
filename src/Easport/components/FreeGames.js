import { UIEasportFreeGames } from "@root/Easport/UI/UIEasportFreeGames.js"

export const FreeGames = ({ news }) => {
    const slice_freeGames = news.slice(0, 3)
    return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Juegos Gratuitos</h2>
		<section class="row row-cols-1 row-cols-md-3 g-2">
			${UIEasportFreeGames({news: slice_freeGames})}
		</section>

		<div class="mt-3">
			<a href="#/easport_juegos" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}