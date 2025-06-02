export const UIBaseEasportNews =({note}) => {
	return `
	<article>
		<div class="card h-100">
			<div class="card-header">
				<small class="text-body-secondary">${note.fecha}</small>
			</div>
			<div style="height: 15rem; object-fict: contain;">
				<img src="${note.imagen}" class="ratio-card-bg img-fluid rounded w-100 h-100" loading="lazy" style="max-width: 100%;" alt="">
			</div>

			<div class="card-body">
				<div class="card-title">
					<h5 class="fs-5 mb-3 text-center fw-semibold">${note.titulo}</h5>
				</div>
				
				<div class="card-text">
					${note.descripcion}
				</div>
			</div>
		</div>
	</article>

	`
}
