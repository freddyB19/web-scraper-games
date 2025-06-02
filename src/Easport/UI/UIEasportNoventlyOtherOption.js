const UIEasportNoventlyOtherOption = ({ news }) => {
    return `
	<article >
		<div class="position-relative" style="height: 15rem;">
			<div class="card text-bg-dark mb-3 position-absolute z-1 top-0 end-0 w-100 h-100">
				<img src="${note.imagen}" class="card-img w-100 h-100" width="100%" style="max-width: 100%;" alt="...">
			</div>

			<div class="position-absolute z-2 bottom-0 end-0 ">
				<div class="bg-dark bg-opacity-25">
					<img src="${note.url_logo}" width="120" alt="">
				</div>
			</div>
		</div>
		<h4 class="display-6 text-center mt-3">
			<a href="${note.url}" target="_blank" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">${note.titulo}</a>
		</h4>
	</article>
	`
}