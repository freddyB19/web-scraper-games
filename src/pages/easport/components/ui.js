const UIEasportNoventlyOtherOption = ({news}) => {
	return `
	<article >
		<div class="position-relative" style="height: 15rem;">
			<div class="card text-bg-dark mb-3 position-absolute z-1 top-0 end-0 w-100 h-100">
				<img src="${note.imagen}" class="card-img w-100 h-100" width="100%" style="max-width: 100%;" alt="...">
			</div>

			<div class="position-absolute z-2 bottom-0 end-0 ">
				<div class="bg-dark bg-opacity-25">
					<img src="${note.url_logo}" width="120" alt="">
				</div>
			</div>
		</div>
		<h4 class="display-6 text-center mt-3">
			<a href="${note.url}" target="_blank" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">${note.titulo}</a>
		</h4>
	</article>
	`
}

const UICard = ({news}) => {
	return `
	${news.map(note =>
		`
		<article style="box-sizing: border-box; aspect-ratio: 3/4 auto;">
			<div class="uk-inline-clip uk-transition-toggle h-75 w-100" tabindex="0" >
				<img src="${note.imagen}" class="card-img rounded w-100 h-100" width="100%" style="max-width: 100%;" alt="...">
	            <div class="rounded uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
	                <div class="bg-dark bg-opacity-75 p-2 rounded">
						<img src="${note.logo}" width="140" alt="">
					</div>
	            </div>
	        </div>

			<h4 class="fs-5 text-center mt-3">
				<a href="${note.url}" target="_blank" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">${note.titulo}</a>
			</h4>
		</article>
		`
	).join('')}
	`
}

export const UIEasportNovently = ({news}) => {
	return `
	${UICard({news: news})}
	`
}

export const UIEasportFreeGames = ({news}) => {
	return `
	${UICard({news: news})}
	`
}

// UI para Updates en el Main Principal
export const UIBaseEasportUpdate = ({note}) => {
	return `
	<article>
		<div class="card shadow-sm h-100">
			<div class="card-header">
				<small badge text-bg-primary>${note.etiqueta}</small>
			</div>
			<div style="height: 15rem; object-fict: contain;">
				<img class="ratio-card-bg img-fluid w-100 h-100" src="${note.info[0].imagen}" alt="${note.info[0].informacion[0]}" style="max-width: 100%;" loading="lazy">
			</div>
			
			<div class="card-body">
				<h5 class="card-title text-center fw-semibold">
					${
						(note.info[0].titulo != 'null') 
						? `${note.info[0].titulo}` 
						: `${note.etiqueta}`
					}
				</h5>
				
				<p class="d-flex flex-row justify-content-between mt-3">
					<span class="badge text-bg-info">
						${note.info[0].informacion[0]}
					</span>
					
					<a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="${note.info[0].url}" target="_blank">Ver</a>
					
					${
						(note.info[0].informacion.length == 2)
						? `
							<span class="text-body-secondary">
								${note.info[0].informacion[1]}
							</span>
						`
						: ``
					}
				</p>
			</div>
		</div>

	</article>
	`
}

// UI para Updates en el Main de Easport
export const UIShortEasportUpdate = ({note}) => {
	return `
	<article>
		<div class="card h-100">
			<div class="card-header text-center">
				<small class="text-body-secondary">${note.etiqueta}</small>
			</div>
			<div style="max-width: 18rem; height: 10rem; object-fict: contain;">
				<img src="${note.info[0].imagen}" class="ratio-card-bg card-img w-100 h-100" width="100%" style="max-width: 100%;" alt="${note.info[0].informacion[0]}">
			</div>
			
			<div class="card-body">
				<span class="badge text-bg-primary">${note.info[0].informacion[0]}</span>
				
				<div class="card-title">
					<h5 class="fs-5 text-center fw-semibold">
						${
							(note.info[0].titulo != 'null') 
							? `${note.info[0].titulo}` 
							: `${note.etiqueta}`
						}

					</h5>
				</div>

				<div class="mt-3 text-center">
					<a class="btn btn-outline-secondary btn-sm text-decoration-none" href="${note.info[0].url}" target="_blank">Ver nota</a>
				</div>
			</div>
			${
				(note.info[0].informacion.length == 2)
				? `
					<div class="card-footer text-center">
						${note.info[0].informacion[1]}
					</div>
				`
				: ``
			}

		</div>
	</article>

	`
}

// TODO: Refactorizar estas dos UI

// UI para la pagina de Updates de Easport 
export const UIEasportUpdate = ({note}) => {
	return `
	<article data-color="${note.etiqueta}">
		<div class="card h-100">
			<div class="card-header text-center">
				<small class="text-body-secondary">${note.etiqueta}</small>
			</div>
			<div style="height: 15rem; object-fict: contain;">
				<img src="${note.imagen}" class="ratio-card-bg card-img w-100 h-100" width="100%" style="max-width: 100%;" alt="${note.info[0].informacion[0]}">
			</div>
			<div class="card-body">
				${
					(note.informacion.length == 2)
					? `
						<span class="badge text-bg-primary">${note.informacion[0]}</span>
					`
					: ``
				}
				
				<div class="card-title">
					<h4 class="fs-5 text-center fst-italic">
						${
							(note.titulo != 'null') 
							? `${note.titulo}` 
							: `${note.etiqueta}`
						}

					</h4>
				</div>
				<div class="card-text mt-3">
					${note.detalle}
				</div>	

				<div class="mt-3 text-center">
					<a class="btn btn-outline-secondary btn-sm text-decoration-none" href="${note.url}" target="_blank">Ver nota</a>
				</div>
			</div>
			${
				(note.informacion.length == 2)
				? `
					<div class="card-footer text-center">
						${note.informacion[1]}
					</div>
				`
				: `
					<div class="card-footer text-center">
						${note.informacion[0]}
					</div>

				`
			}

		</div>
	</article>

	`
}

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

export const UIEasportNews = ({note}) => {
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



