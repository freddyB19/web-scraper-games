import easportLogo from "@easport/components/logo2.svg"
import lolLogo from "@lol/components/lol3.svg"

import { UIEasportNovently, UIBaseEasportUpdate } from '@easport/components/ui.js'

import * as values from "@root/utils/values.js"

import { UINewsAndNotes } from "@lol/components/news_notes.js"


const NewsGamesLol = ({note, notes}) => {
	const dateNoticia = new Date(note.fecha)
	const size_logo = (screen.width <= values.MaxWidth)? values.SizeSmall_LolLogo_lol3 : values.SizeBig_LolLogo_lol3

	return `
		<div class="d-flex justify-content-center align-items-center">
			<img src="${lolLogo}" alt="Logo" width="${size_logo}">
		</div>
		<section>
			<article>
				<div class="card">
				  <div class="card-header">
				    Noticias
				  </div>
				  <div class="card-body">
				    <h5 class="card-title fs-5 fw-semibold">${note.titulo}</h5>
				    <p class="card-text">
				    	<span class="badge text-bg-primary me-3">${note.categoria}</span> 
				    	<small class="text-body-secondary">${dateNoticia.toDateString()}</small>
				    </p>
				    <p class="card-text">${note.detalle}</p>
				    <p class="text-center">
				    <a href="${note.url}" target="_blank" class="btn btn-outline-primary text-decoration-none">Ver</a>
				    </p>
				  </div>
				</div>
			</article>
			
			<div class="mt-3">
				<a href="#/lol_noticias" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
			</div>		

		</section>
		
		<section class="mt-5">
			<h2 class="text-center fst-italic mb-3">Notas de la versión</h2>
			<div class="row row-cols-1 row-cols-md-3 g-3">
				${notes.map(note => `
					${UINewsAndNotes({note: note})}
				`).join('')}
			</div>
		<div class="mt-3">
			<a href="#/lol_notas" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</section>

	`
}


const NewGamesEasport = ({novelty = [], updates = []}) => {

	const size_logo = (screen.width <= values.MaxWidth)? values.SizeNormal_EasportLogo : values.SizeBig_EasportLogo
	
	const act = updates[0].etiqueta.slice(
		Math.floor(updates[0].etiqueta.length / 2) + 1,
		updates[0].etiqueta.length
	)

	return `	
	<div class="d-flex justify-content-center align-items-center">
		<img src="${easportLogo}" alt="Logo" width="${size_logo}">
	</div>

	<section>
		<h3 class="text-center fst-italic mb-3">Novedades</h3>
		<div class="row row-cols-1 row-cols-md-4 g-3">
			${UIEasportNovently({news: novelty})}
		</div>
		<div class="mt-3">
			<a href="#/easport_novedades" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>		
		</div>
	</section>


	<section class="mt-5">
		<h3 class="text-center fst-italic mb-3">Actualizaciones</h3>
		<div class="row row-cols-1 row-cols-md-3 g-3">
			${act.map(data => 
				`${UIBaseEasportUpdate({note: data})}`
			).join('')}
		</div>
		<div class="mt-3">
			<a href="#/easport_actualizaciones" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</section>
	`
}

export const MainGames = ({games = []}) => {
	const [lol, easport] = [...games]

	return `
		${NewsGamesLol({note: lol.pagina.info.noticias[0], notes: lol.pagina.info.notas.slice(0, 3)})}
		${NewGamesEasport({
			novelty: easport.pagina.info.novedades.slice(0, 4), 
			updates: easport.pagina.info.actualizaciones
		})}
	`
}