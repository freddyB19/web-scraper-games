export const MainPrincipal = ({ note }) => {
    return `
	<div>
		<article class="p-md-5 rounded text-body-emphasis d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center">
			<div class="card mb-3">
			  <img src="${note.imagen}" alt="" class="ratio-card-bg img-fluid rounded w-100 h-100" loading="lazy"  style="max-width: 100%;">
			  <div class="card-body">
				<span class="badge text-bg-primary">${note.meta}</span>
			    <h5 class="card-title fs-5 text-center fw-semibold">${note.titulo}</h5>
			    <div class="d-flex flex-wrap py-3 mb-4 flex-row justify-content-evenly align-items-center mt-3">
					<a class="btn btn-outline-primary text-decoration-none" href="${note.url}" target="_blank">Ver nota</a>
		    		<small class="text-body-secondary">${note.autor}</small>
		    	</div>
			  </div>
			</div>	
		</article>
		<a href="#/noticias" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>	
	</div>
	`
}