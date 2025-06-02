export const Article = ({ note, web }) => {

    return `
		<article class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
			<img class="ratio-card img-fluid rounded w-100 h-100" loading="lazy" src="${note.imagen}" alt=""  style="max-width: 100%;">	

			<div class="col-lg-8">
				<h6 class="text-start fw-medium">${note.titulo}</h6></h6>
				<div class="hstack gap-3 justify-content-center text-center">
					<small><a class="text-uppercase" href="#/${web}">${note.categoria}</a></small>
					  <div class="vr"></div>
					<a class="btn btn-outline-secondary text-decoration-none" href="${note.url}" target="_blank">Ver</a>	
				</div>
			</div>
		</article>
	`
}