export const UIBaseEasportUpdate = ({ note }) => {
    return `
	<article>
		<div class="card shadow-sm h-100">
			<div class="card-header">
				<small badge text-bg-primary>${note.etiqueta}</small>
			</div>
			<div style="height: 15rem; object-fict: contain;">
				<img class="ratio-card-bg img-fluid w-100 h-100" src="${note.info[0].imagen}" alt="${note.info[0].informacion[0]}" style="max-width: 100%;" loading="lazy">
			</div>
			
			<div class="card-body">
				<h5 class="card-title text-center fw-semibold">
					${
						(note.info[0].titulo != 'null') 
						? `${note.info[0].titulo}` 
						: `${note.etiqueta}`
					}
				</h5>
				
				<p class="d-flex flex-column justify-content-md-between justify-content-around align-items-center mt-3">
					<span class="badge text-bg-info mb-3">
						${note.info[0].informacion[0]}
					</span>
					
					<a class="mb-3 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="${note.info[0].url}" target="_blank">Ver</a>
					
					${
						(note.info[0].informacion.length == 2)
						? `
							<span class="text-body-secondary">
								${note.info[0].informacion[1]}
							</span>
						`
						: ``
					}
				</p>
			</div>
		</div>

	</article>
	`
}