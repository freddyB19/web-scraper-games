export const UIShortEasportUpdate = ({note}) => {
	return `
	<article>
		<div class="card h-100">
			<div class="card-header text-center">
				<small class="text-body-secondary">${note.etiqueta}</small>
			</div>
			<div style="max-width: 18rem; height: 10rem; object-fict: contain;">
				<img src="${note.info[0].imagen}" class="ratio-card-bg card-img w-100 h-100" width="100%" style="max-width: 100%;" alt="${note.info[0].informacion[0]}">
			</div>
			
			<div class="card-body">
				<span class="badge text-bg-primary">${note.info[0].informacion[0]}</span>
				
				<div class="card-title">
					<h5 class="fs-5 text-center fw-semibold">
						${
							(note.info[0].titulo != 'null') 
							? `${note.info[0].titulo}` 
							: `${note.etiqueta}`
						}

					</h5>
				</div>

				<div class="mt-3 text-center">
					<a class="btn btn-outline-secondary btn-sm text-decoration-none" href="${note.info[0].url}" target="_blank">Ver nota</a>
				</div>
			</div>
			${
				(note.info[0].informacion.length == 2)
				? `
					<div class="card-footer text-center">
						${note.info[0].informacion[1]}
					</div>
				`
				: ``
			}

		</div>
	</article>

	`
}
