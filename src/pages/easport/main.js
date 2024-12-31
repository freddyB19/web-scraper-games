import { EasportNav } from './components/nav.js'
import { 
	UIEasportNovently, 
	UIEasportFreeGames, 
	UIBaseEasportNews, 
	UIShortEasportUpdate 
} from './components/ui.js'

import easportLogo from './components/logo2.svg'

import { CurrentPage } from "@root/utils/currentPage.js"

const News = ({news}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Noticias</h2>
		<section class="row row-cols-1 row-cols-md-3 g-3">
			${news.map(note =>`
				${UIBaseEasportNews({note: note})}
			`).join('')}
		</section>

		<div class="mt-3">
			<a href="#/easport_noticias" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}

const Novelty = ({news}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Novedades</h2>
		<section class="row row-cols-1 row-cols-md-4 g-2"> 
			${UIEasportNovently({news: news})}
		</section>

		<div class="mt-3">
			<a href="#/easport_novedades" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}

const CommingSoon = ({news}) => {

	return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Próximamente</h2>
		<section>
			<article>
				<div class="uk-child-width-expand@m" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">

				${news.map((note, index) =>
					`
					<div>
				        <div class="uk-card uk-card-default uk-card-body" uk-scrollspy-class="${((index % 2) == 0) ? 'uk-animation-slide-top' : 'uk-animation-slide-bottom'}">
				            <h5 class="fs-5 uk-card-title text-center fw-semibold">${note.titulo}</h5>
				            <p class="text-center">Fecha: <span class="uk-badge">${note.fecha}</span></p>
						<table class="uk-table uk-table-divider">
						    <thead>
						        <tr>
						            <th>Plataformas</th>
						            <th>Genero</th>
						        </tr>
						    </thead>
						    <tbody>
								<tr>
									<td>
									${note.plataformas.map( data =>
									`
										<a href="${data.url}"><span class="badge rounded-pill text-bg-primary">${data.tipo}</span></a>
									` 
									).join('')}
									</td>
									<td>
									${note.genero.map( data =>
									`
										<a href="${data.url}"><span class="badge text-bg-success">${data.genero}</span></a>
									` 
									).join('')}
									</td>
								</tr>
						    </tbody>
						</table>
				        </div>
				    </div>
					`
				).join('')}

				</div>
				
			</article>
		</section>
	</div>
	`
}


const FreeGames = ({news}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Juegos Gratuitos</h2>
		<section class="row row-cols-1 row-cols-md-3 g-2">
			${UIEasportFreeGames({news: news})}
		</section>

		<div class="mt-3">
			<a href="#/easport_juegos" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}

const Updates = ({news}) => {
	const updates = news[0].etiqueta.slice(
		Math.floor(news[0].etiqueta.length / 2),
		news[0].etiqueta.length
	)

	return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Actualizaciones</h2>
		<section class="row row-cols-1 row-cols-md-4 g-2">
			${updates.map(note => 
				`${UIShortEasportUpdate({note: note})}`
			).join('')}
		</section>

		<div class="mt-3">
			<a href="#/easport_actualizaciones" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
		</div>
	</div>
	`
}


export const Easport = ({pages}) => {
	
	const easport = pages.find(page => page.pagina.nombre == 'easport')
	
	return `
		${CurrentPage({logo: easportLogo, logo_w: "100", page: "Easport"})}

		${EasportNav({})}
		
		${News({news: easport.pagina.info.noticias.slice(0,3)})}
		${Novelty({news: easport.pagina.info.novedades.slice(0, 4)})}
		${CommingSoon({news: easport.pagina.info.proximamente})}
		${FreeGames({news: easport.pagina.info.gratuitos.slice(0,3)})}
		${Updates({news: easport.pagina.info.actualizaciones})}
	`
}