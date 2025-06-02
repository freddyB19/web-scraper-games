export const NotesSecondary = ({ notes }) => {
    return `
	<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
		${notes.map(note => 
			`
			<article>
				<div class="card h-100">
					<div class="card-header">
						<small class="text-body-secondary">${note.fecha}</small>
					</div>
					
					<div style="height: 15rem; object-fict: contain;">
						<img src="${note.imagen}" class="img-fluid w-100 h-100" loading="lazy" style="max-width: 100%;" alt="">
					</div>

					<div class="card-body">
						<h3 class="card-title fs-5 mb-3">${note.titulo}</h3>
						<p class="card-text">${note.extra}</p>
						<p class="text-center">
							<a href="${note.url}" class=" btn btn-outline-secondary text-decoration-none" target="_blank">Ver nota</a>
						</p>
						
					</div>
				</div>
			</article>
			`
		).join('')}
	</section>
	`
}

export const NotePrincipal = ({ note }) => {
    return `
	<section class="mt-3 mb-5">
		<article>
			<div class="card text-bg-dark mb-3">
			  <img src="${note.imagen}" class="ratio-card-bg card-img" width="100%" style="max-width: 100%;" alt="...">	
			</div>
			
			<h2 class="text-center display-6 fst-italic mb-3">${note.titulo}</h2>
			
			<div class="hstack gap-3 d-flex flex-wrap justify-content-center">
				<a href="${note.url}" class="btn btn-outline-primary text-decoration-none" target="_blank">Nota completa</a>
				<div class="vr"></div>
				<small class="text-body-secondary">${note.fecha}</small>
			</div>

		</article>
	</section>
	`
}