import { NewsCurrentPage } from "../components/currentPage.js"

const NewsLaNacion = ({news}) => {
	return `
	${news.pagina.map( note =>
		`<article>
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

		</article>`
	).join('')}
	`
}

export const Lanacion = ({pages}) => {
	const [lol, easport, noticias] = [...pages]
	
	const lanacion = noticias.pagina.info.find(news => news.nombre == 'lanacion')
	
	return `
		<h1 class="display-4 text-center fw-semibold">La Nación</h1>
		${NewsCurrentPage({section: 'La Nación'})}

		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
			${NewsLaNacion({news: lanacion})}
		</section>
	`
}