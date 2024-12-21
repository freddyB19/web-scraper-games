
const ListNewsMarca_LaNacion = ({news}) => {
	return `
	${news.map(note =>`
		<article>
			<div class="card shadow-sm h-100">
				<div class="card-header text-center">
					${note.web}
				</div>
				<div style="height: 15rem; object-fict: contain;">
					<img src="${note.pagina[0].imagen}" class="img-fluid w-100 h-100" style="max-width: 100%;" loading="lazy" alt="">
				</div>

				<div class="card-body">
					<div class="card-title">
						${
							(Array.isArray(note.pagina[0].titulo))
							? `${note.pagina[0].titulo[1]}`
							: `${note.pagina[0].titulo}`
						}
					</div>
					<p class="text-center mt-3">
						<a class="btn btn-outline-info text-decoration-none" href="#/${note.nombre}">Ver más</a>				
					</p>
				</div>
			</div>
		</article>
	`).join('')}

	`
}


const ListNewsDecrypt_ElNacional = ({news}) => {
	return `
	${news.map(note =>`
		<article>
			<div class="card shadow-sm h-100">
				<div class="card-header text-center">
					${note.web}
				</div>
				<div style="height: 15rem; object-fict: contain;">
					<img src="${note.pagina.principal.imagen}" class="img-fluid w-100 h-100" style="max-width: 100%;" loading="lazy" alt="">
				</div>

				<div class="card-body">
					<div class="card-title">${note.pagina.principal.titulo}</div>
					<p class="text-center mt-3">
						<a class="btn btn-outline-info text-decoration-none" href="#/${note.nombre}">Ver más</a>
					</p>
				</div>
				
			</div>

		</article>

	`).join('')}
	

	`
}

export const News = ({pages}) => {
	const [lol, easport, noticias] = [...pages]
	
	const [marca, lanacion, decrypt_tech, decrypt_ia, elnacional_tech, elnacional_ia] = [...noticias.pagina.info]

	const news_marca = {...marca, web: 'Marca'}
	const news_lanacion = {...lanacion, web: 'La Nación'}
	const news_decrypt_tech = {...decrypt_tech, web: 'Decrypt (Tecnología)'}
	const news_decrypt_ia = {...decrypt_ia, web: 'Decrypt (IA)'}
	const news_elnacional_tech = {...elnacional_tech, web: 'El Nacional (Tecnología)'}
	const news_elnacional_ia = {...elnacional_ia, web: 'El Nacional (IA)'}


	return `
		<h1 class="display-3 text-center">Noticias</h1>
		<nav class="my-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
		  <ol class="breadcrumb">
		    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
		    <li class="breadcrumb-item active" aria-current="page">Noticias</li>
		  </ol>
		</nav>

		<section class="mt-3 row row-cols-1 row-cols-md-3 g-3">
			${ListNewsMarca_LaNacion({news: [news_marca, news_lanacion]})}

			${ListNewsDecrypt_ElNacional({news: [
				news_decrypt_tech, 
				news_decrypt_ia, 
				news_elnacional_tech,
				news_elnacional_ia
			]})}
		</section>
	`
}