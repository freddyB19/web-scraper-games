import { UINewsAndNotes } from "@root/LOL/UI/UINewsAndNotes.js"
import * as values from "@root/utils/values.js"
import lolLogo from "@root/LOL/files/lol3.svg"

const NotesGamesLol = ({ notes }) => {
    if (!notes)
        return ``

    const slice_notes = notes.slice(0, 3)

    return `
		<section class="mt-5">
				<h2 class="text-center fst-italic mb-3">Notas de la versión</h2>
				<div class="row row-cols-1 row-cols-md-3 g-3">
					${slice_notes.map(note => `
						${UINewsAndNotes({note: note})}
					`).join('')}
				</div>
			<div class="mt-3">
				<a href="#/lol_notas" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
			</div>
		</section>
	`
}


export const NewsGamesLol = ({ news, notes }) => {
    if (!news)
        return ``

    const note = news[0]

    const dateNoticia = new Date(note.fecha)
    const size_logo = (screen.width <= values.MaxWidth) ? values.SizeSmall_LolLogo_lol3 : values.SizeBig_LolLogo_lol3

    return `
		<div class="d-flex justify-content-center align-items-center">
			<img src="${lolLogo}" alt="Logo" width="${size_logo}">
		</div>
		<section>
			<article>
				<div class="card">
				  <div class="card-header">
				    Noticias
				  </div><div class="card-body">
				    <h5 class="card-title fs-5 fw-semibold">${note.titulo}</h5>
				    <p class="card-text">
				    	<span class="badge text-bg-primary me-3">${note.categoria}</span> 
				    	<small class="text-body-secondary">${dateNoticia.toDateString()}</small>
				    </p>
				    <p class="card-text">${note.detalle}</p>
				    <p class="text-center">
				    <a href="${note.url}" target="_blank" class="btn btn-outline-primary text-decoration-none">Ver</a>
				    </p>
				  </div>
				</div>
			</article>
			
			<div class="mt-3">
				<a href="#/lol_noticias" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Ver más</a>
			</div>		

		</section>
		
		${NotesGamesLol({ notes })}
	`
}