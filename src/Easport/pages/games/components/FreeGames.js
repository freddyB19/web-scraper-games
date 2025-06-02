import { UIEasportFreeGames } from "@root/Easport/UI/UIEasportFreeGames.js"

export const FreeGames = ({ news }) => {
    return `
	<div class="mt-5">
		<h2 class="display-4 text-center my-5">Juegos Gratuitos</h2>

		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
			${UIEasportFreeGames({news: news})}
		</section>
	</div>
	`
}