export const UICard = ({ news }) => {
    return `
	${news.map(note =>
		`
		<article style="box-sizing: border-box; aspect-ratio: 3/4 auto;">
			<div class="uk-inline-clip uk-transition-toggle h-75 w-100" tabindex="0" >
				<img src="${note.imagen}" class="card-img rounded w-100 h-100" width="100%" style="max-width: 100%;" alt="...">
	            <div class="rounded uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
	                <div class="bg-dark bg-opacity-75 p-2 rounded">
						<img src="${note.logo}" width="140" alt="">
					</div>
	            </div>
	        </div>

			<h4 class="fs-5 text-center mt-3">
				<a href="${note.url}" target="_blank" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">${note.titulo}</a>
			</h4>
		</article>
		`
	).join('')}
	`
}