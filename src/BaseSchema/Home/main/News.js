import { ExtraNews } from "./ExtraNews.js"
import { MainPrincipal } from "./components/MainPrincipal.js"
import { MainSecondary } from "./components/MainSecondary.js"

export const MainNews = ({ noticias }) => {
    const [principal, ...secondary] = [...noticias.pagina.info[0].pagina]

    const omitir_paginas = ['marca', 'lanacion']

    const pages = noticias.pagina.info.filter(noticiero =>
        !omitir_paginas.includes(noticiero.nombre)
    ).filter(noticiero => {
        if (noticiero.pagina)
            return { "web": noticiero.nombre, "principal": noticiero.pagina.principal }
    })

    const has_pages = pages.length == 0

    return `
	<main class="mb-4">
		<div class="row g-5 mb-5">
			<section class="col-md-${(has_pages) ? `12` : `8` }">
				${ MainPrincipal({note: principal}) }
			</section>
			
			${
				(has_pages)
				? ``
				: `
					<section class="col-md-4">
					<aside>
					<h4 class="fst-italic">Novedades tecnológicas</h4>
					${ ExtraNews({notes: pages}) }
					</aside>
					</section>
				`
			}
			
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