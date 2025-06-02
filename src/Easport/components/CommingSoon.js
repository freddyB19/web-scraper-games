export const CommingSoon = ({ news }) => {

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