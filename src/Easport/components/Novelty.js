import { UIEasportNovently } from "@root/Easport/UI/UIEasportNovently.js"

export const Novelty = ({ news }) => {
    const slice_novelty = news.slice(0, 4)

    return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Novedades</h2>
		<section class="row row-cols-1 row-cols-md-4 g-2"> 
			${UIEasportNovently({news: slice_novelty})}
		</section>

		<div class="mt-3">
			<a href="#/easport_novedades" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}