import { UINewsMarca } from "@noticias/marca/ui.js"

import { ExtraNews } from "./extraNews.js"

const MainPrincipal = ({note}) => {
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

const MainSecondary = ({notes}) => {
	const mainNotes = notes.slice(0, 3)
	
	return `
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		${mainNotes.map((note) =>`
			${UINewsMarca({note: note})}
		`).join('')}
		
	</div>
	`	
}


export const MainNews = ({noticias}) => {
	const [principal, ...secondary] = [...noticias.pagina.info[0].pagina]

	const omitir_paginas = ['marca', 'lanacion']

	const pages = noticias.pagina.info.filter(noticiero => 
		!omitir_paginas.includes(noticiero.nombre)
	).map(noticiero => {
			return {"web": noticiero.nombre, "principal": noticiero.pagina.principal}
		}
	)

	return `
	<main class="mb-4">
		<div class="row g-5 mb-5">
			<section class="col-md-8">
				${ MainPrincipal({note: principal}) }

			</section>
			<section class="col-md-4">
				<h4 class="fst-italic">Novedades tecnológicas</h4>
				${ ExtraNews({notes: pages}) }
			</section>
		</div>
		
		<div class="mb-4">
			<section>
				<h3 class="display-4">Noticias</h3>

				${MainSecondary({notes: secondary})}

				<div class="mt-3">
					<a href="#/marca" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
				</div>
			</section>
		</div>
		
	</main>

	`
}