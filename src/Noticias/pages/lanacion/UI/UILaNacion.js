const UILaNacion = ({ note }) => {
    return `
		<article>
			<div class="card h-100">
				<div style="height: 15rem; object-fict: contain;">
					<img src="${note.imagen}" class="img-fluid rounded w-100 h-100" style="max-width: 100%;" loading="lazy" alt="">
				</div>

				<div class="card-body">
					<div class="card-title">
						${
							(note.titulo.length == 2)
							? `
							<span class="badge text-bg-primary">${note.titulo[0]}</span>
							<div class="card-title">
								<h5>${note.titulo[1]}</h5>
							</div>`
							: `
							<div class="card-title">
								<h5>${note.titulo}</h5>
							</div>
							`
						}
					</div>
				</div>
				<p class="text-center mt-3">
					<a class="btn btn-outline-primary btn-lg text-decoration-none" href="${note.url}" target="_blank">Ver nota</a>
				</p>

				<div class="card-footer">
						<small class="text-body-secondary">${note.fecha}</small>
				</div>
			</div>

		</article>
	`
}


export const ManageUI = ({ note }) => {
    return UILaNacion({ note })
}