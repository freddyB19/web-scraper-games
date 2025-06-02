import { ManagerUI } from "./UI/UINews.js"

export const News = ({ pages }) => {
    const [lol, easport, noticias] = [...pages]

    const [
        marca,
        lanacion,
        decrypt_tech,
        decrypt_ia,
        elnacional_tech,
        elnacional_ia
    ] = [...noticias.pagina.info]

    const news_marca = { ...marca, web: 'Marca' }
    const news_lanacion = { ...lanacion, web: 'La Nación' }
    const news_decrypt_tech = { ...decrypt_tech, web: 'Decrypt (Tecnología)' }
    const news_decrypt_ia = { ...decrypt_ia, web: 'Decrypt (IA)' }
    const news_elnacional_tech = { ...elnacional_tech, web: 'El Nacional (Tecnología)' }
    const news_elnacional_ia = { ...elnacional_ia, web: 'El Nacional (IA)' }


    return `
		<h1 class="display-3 text-center">Noticias</h1>
		<nav class="my-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
		  <ol class="breadcrumb">
		    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
		    <li class="breadcrumb-item active" aria-current="page">Noticias</li>
		  </ol>
		</nav>

		<section class="mt-3 row row-cols-1 row-cols-md-3 g-3">
			${ManagerUI({news: news_marca, ui: "marca"})}
			${ManagerUI({news: news_lanacion, ui: "lanacion"})}
			${ManagerUI({news: news_decrypt_tech, ui: "decryp_tech"})}
			${ManagerUI({news: news_decrypt_ia, ui: "decryp_ia"})}
			${ManagerUI({news: news_elnacional_tech, ui: "elnacional_tech"})}
			${ManagerUI({news: news_elnacional_ia, ui: "elnacional_tech"})}
		</section>
	`
}