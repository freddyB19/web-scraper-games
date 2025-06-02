const UINewsWithExtendsNotes = ({ news }) => {
    if (!news.pagina)
        return ``

    return `
		<article>
			<div class="card shadow-sm h-100">
				<div class="card-header text-center">
					${news.web}
				</div>
				<div style="height: 15rem; object-fict: contain;">
					<img src="${news.pagina.principal.imagen}" class="img-fluid w-100 h-100" style="max-width: 100%;" loading="lazy" alt="">
				</div>

				<div class="card-body">
					<div class="card-title">${news.pagina.principal.titulo}</div>
					<p class="text-center mt-3">
						<a class="btn btn-outline-info text-decoration-none" href="#/${news.nombre}">Ver más</a>
					</p>
				</div>
				
			</div>

		</article>
	`
}


const UINewsWithBasicNotes = ({ news }) => {
    if (!news.pagina)
        return ``

    return `
	<article>
		<div class="card shadow-sm h-100">
			<div class="card-header text-center">
				${news.web}
			</div>
			<div style="height: 15rem; object-fict: contain;">
				<img src="${news.pagina[0].imagen}" class="img-fluid w-100 h-100" style="max-width: 100%;" loading="lazy" alt="">
			</div>

			<div class="card-body">
				<div class="card-title">
					${
						(Array.isArray(news.pagina[0].titulo))
						? `${news.pagina[0].titulo[1]}`
						: `${news.pagina[0].titulo}`
					}
				</div>
				<p class="text-center mt-3">
					<a class="btn btn-outline-info text-decoration-none" href="#/${news.nombre}">Ver más</a>				
				</p>
			</div>
		</div>
	</article>

	`
}

export const ManagerUI = ({ news, ui = null }) => {
    const UIs = {
        'decryp_ia': UINewsWithExtendsNotes,
        'decryp_tech': UINewsWithExtendsNotes,
        'elnacional_tech': UINewsWithExtendsNotes,
        'elnacional_ia': UINewsWithExtendsNotes,

        'marca': UINewsWithBasicNotes,
        'lanacion': UINewsWithBasicNotes
    }

    return UIs[ui]({ news })
}