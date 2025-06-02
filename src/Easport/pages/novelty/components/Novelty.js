import { UIEasportNovently } from "@root/Easport/UI/UIEasportNovently.js"

export const Novelty = ({ news }) => {
    return `
	<div class="mt-5">
		<h2 class="display-4 text-center my-5">Novedades</h2>

		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2"> 
			${UIEasportNovently({news: news})}
		</section>
	</div>
	`
}