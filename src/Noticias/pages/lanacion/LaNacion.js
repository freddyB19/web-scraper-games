import { NewsCurrentPage } from "@root/Noticias/components/CurrentPage.js"
import { NewsLaNacion } from "./News.js"

export const Lanacion = ({ pages }) => {
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