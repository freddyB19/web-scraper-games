import { UIBaseEasportUpdate } from '@root/Easport/UI/UIBaseEasportUpdate.js'

export const EasportUpdate = ({ updates }) => {
    if (updates.length == 0)
        return ``

    const article_updates = updates[0].etiqueta.slice(
        Math.floor(updates[0].etiqueta.length / 2) + 1,
        updates[0].etiqueta.length
    )

    return `
		<section class="mt-5">
			<h3 class="text-center fst-italic mb-3">Actualizaciones</h3>
			<div class="row row-cols-1 row-cols-md-3 g-3">
				${article_updates.map(data => 
					`${UIBaseEasportUpdate({note: data})}`
				).join('')}
			</div>
			<div class="mt-3">
				<a href="#/easport_actualizaciones" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
			</div>
		</section>
	`
}