export const UIEasportUpdate = ({note}) => {
	return `
	<article data-color="${note.etiqueta}">
		<div class="card h-100">
			<div class="card-header text-center">
				<small class="text-body-secondary">${note.etiqueta}</small>
			</div>
			<div style="height: 15rem; object-fict: contain;">
				<img src="${note.imagen}" class="ratio-card-bg card-img w-100 h-100" width="100%" style="max-width: 100%;" alt="${note.info[0].informacion[0]}">
			</div>
			<div class="card-body">
				${
					(note.informacion.length == 2)
					? `
						<span class="badge text-bg-primary">${note.informacion[0]}</span>
					`
					: ``
				}
				
				<div class="card-title">
					<h4 class="fs-5 text-center fst-italic">
						${
							(note.titulo != 'null') 
							? `${note.titulo}` 
							: `${note.etiqueta}`
						}

					</h4>
				</div>
				<div class="card-text mt-3">
					${note.detalle}
				</div>	

				<div class="mt-3 text-center">
					<a class="btn btn-outline-secondary btn-sm text-decoration-none" href="${note.url}" target="_blank">Ver nota</a>
				</div>
			</div>
			${
				(note.informacion.length == 2)
				? `
					<div class="card-footer text-center">
						${note.informacion[1]}
					</div>
				`
				: `
					<div class="card-footer text-center">
						${note.informacion[0]}
					</div>

				`
			}

		</div>
	</article>

	`
}
