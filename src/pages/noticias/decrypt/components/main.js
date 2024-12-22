export const NotesSecondary = ({notes}) => {
	return `
	<section class="mb-3">
		${notes.map(note => 
			`
			<article class="mb-1">
				<h3 class="display-6 link-body-emphasis mb-1">${note.titulo}</h3>
				<p>
					<small class="text-body-secondary">${note.fecha}</small>
				</p>
				<p class="lh-lg">
					${note.descripcion}
				</p>
				<a href="${note.url}" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" target="_blank">Ver nota</a>
			</article>

			<hr class="mb-5 opacity-100 border border-1">
			`
		).join('')}
	</section>
	`
}
export const NotesShortSecondary = ({notes}) => {
	return `
	<section class="my-5">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
			${notes.map(note =>
			`
			<article>
				<div class="card h-100">
				  <div class="card-body">
				    <h5 class="card-title fs-5 mb-3">${note.titulo}</h5>
				    <h6 class="card-subtitle mb-2 text-body-secondary">${note.fecha}</h6>
				    <a href="${note.url}" class="card-link " target="_blank">Ver nota</a>
				  </div>
				</div>
			</article>
			`
			).join('')}
		</div>
	</section>	
	`
}
export const NotePrincipal = ({note}) => {
	return `
	<section class="mt-3 mb-4">
		<article>
			<div class="mb-3">
			  <img src="${note.imagen}" class="ratio-card-bg card-img" width="100%" style="max-width: 100%;" alt="...">	
			</div>
			<span class="badge text-bg-secondary mb-3"><small>${note.fecha}</small></span>
			<h2 class="display-6 fst-italic mb-3">${note.titulo}</h2>

			<p class="font-monospace mb-3">${note.descripcion}</p>
			
			<a href="${note.url}" class="btn btn-outline-primary text-decoration-none" target="_blank">Nota completa</a>
		</article>
	</section>
	`
}