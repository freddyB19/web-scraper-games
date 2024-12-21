import { ShowUrl } from "./show_url.js"


export const UINewsAndNotes = ({note}) => {
	const dateNote = new Date(note.fecha)
	return `
		<article>
			<div class="card h-100">
				<div class="card-header text-center">
					<span class="badge rounded-pill text-bg-primary">${note.categoria}</span>
				</div>
				<div class="card-body">
					<div class="card-title">
						<h4 class="fs-4 fw-semibold">${note.titulo}</h4>
					</div>
					<div class="card-text">${note.detalle}</div>
					<div class="mt-3">
						<a class="btn btn-outline-secondary text-decoration-none" href="${note.url}" target="_blank">Ver nota</a>
					</div>
				</div>
				<div class="card-footer">
					${dateNote.toDateString()}
				</div>
			</div>
		</article>

	`
}


export const NewsAndNotes = ({info, title = "", url = "", show = true}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">${title}</h2>

		<section class="row row-cols-1 row-cols-md-3 g-4">
			${info.map(note =>`
				${UINewsAndNotes({note: note})}
			`).join('')}
		</section>

		${ShowUrl({show: show, url: url})}
	</div>

	`
}
