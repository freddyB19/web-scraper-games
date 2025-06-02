export const CommingSoon = ({ news }) => {

    return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Próximamente</h2>
		<section>
			<article>
				
    			<ul class="uk-flex uk-flex-center uk-flex-column uk-flex-row@s uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
				${news.map((note, index) =>
					`
					<li><a href="#${note.titulo}">${note.titulo}</a></li>	
					`
				).join('')}
				</ul>
				<div class="uk-switcher uk-margin">
					${news.map((note, index) =>
					`	
					<div class="uk-card uk-card-default uk-card-body">
				            <h5 class="fs-5 uk-card-title text-center fw-semibold">${note.titulo}</h5>
							<p class="text-center">Fecha: <span class="uk-badge">${note.fecha}</span></p>
						
						<table class="uk-table uk-table-small uk-table-divider">
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
				`).join('')}
				</div>
			
				
			</article>
		</section>
	</div>
	`
}