
export const UINewsMarca = ({note}) => {
	return `
	<article>
		<div class="card shadow-sm h-100">
			<div style="height: 15rem; object-fict: contain;">
				<img src="${note.imagen}" class="ratio-card-bg img-fluid rounded w-100 h-100" style="max-width: 100%;" loading="lazy" alt="">
			</div>
			
			<div class="card-body">
				<span class="badge text-bg-primary">${note.autor}</span>
				<div class="card-title text-center">
					<h5 class="fs-5 fw-semibold">${note.titulo}</h5>
				</div>
					
				<p class="text-center mt-3">
					<a class="btn btn-outline-primary btn-lg text-decoration-none" href="${note.url}" target="_blank">Ver nota</a>
				</p>
			</div>
			<div class="card-footer">
				<small class="text-body-secondary">${note.meta}</small>
			</div>	
		</div>
	</article>
	`
}