import { NewsCurrentPage } from "@root/Noticias/components/CurrentPage.js"

import { NewsMarca } from "./News.js"

export const Marca = ({ pages }) => {
    const [lol, easport, noticias] = [...pages]

    const marca = noticias.pagina.info.find(news => news.nombre == 'marca')

    return `
		<h1 class="display-4 text-center fw-semibold">Marca</h1>
		${NewsCurrentPage({section: 'Marca'})}
	
		<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
			${NewsMarca({news: marca})}
		</section>
	`
}