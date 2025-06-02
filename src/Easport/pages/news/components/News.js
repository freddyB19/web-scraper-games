import { UIEasportNews } from "@root/Easport/UI/UIEasportNews.js"

export const News = ({ news }) => {
    return `
	<div class="mt-5">
		<h2 class="display-4 text-center my-5">Noticias</h2>

		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		${news.map(note =>`
			${UIEasportNews({note: note})}
		`).join('')}
		</section>
	</div>
	`
}