import { UIBaseEasportNews } from "@root/Easport/UI/UIBaseEasportNews.js"

export const News = ({ news }) => {
    const slice_news = news.slice(0, 3)

    return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Noticias</h2>
		<section class="row row-cols-1 row-cols-md-3 g-3">
			${slice_news.map(note =>`
				${UIBaseEasportNews({note: note})}
			`).join('')}
		</section>

		<div class="mt-3">
			<a href="#/easport_noticias" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}