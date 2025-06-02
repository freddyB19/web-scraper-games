import { UIEasportNovently } from '@root/Easport/UI/UIEasportNovently.js'


export const EasportNovelty = ({ novelty }) => {
    if (novelty.length == 0)
        return ``

    const slice_novelty = novelty.slice(0, 4)

    return `
		<section>
			<h3 class="text-center fst-italic mb-3">Novedades</h3>
			<div class="row row-cols-1 row-cols-md-4 g-3">
				${UIEasportNovently({news: slice_novelty})}
			</div>
			<div class="mt-3">
				<a href="#/easport_novedades" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>		
			</div>
		</section>
	`
}