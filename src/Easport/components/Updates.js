import { UIShortEasportUpdate } from "@root/Easport/UI/UIShortEasportUpdate.js"

export const Updates = ({ news }) => {
    const updates = news[0].etiqueta.slice(
        Math.floor(news[0].etiqueta.length / 2),
        news[0].etiqueta.length
    )

    return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Actualizaciones</h2>
		<section class="row row-cols-1 row-cols-md-4 g-2">
			${updates.map(note => 
				`${UIShortEasportUpdate({note: note})}`
			).join('')}
		</section>

		<div class="mt-3">
			<a href="#/easport_actualizaciones" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}