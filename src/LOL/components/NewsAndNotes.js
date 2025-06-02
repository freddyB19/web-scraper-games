import { ShowUrl } from "./ShowUrl.js"

import { UINewsAndNotes } from "@root/LOL/UI/UINewsAndNotes.js"

export const NewsAndNotes = ({ info, title = "", url = "", show = true }) => {

    if (!info)
        return ``

    const slice_info = info.slice(0, 3)

    return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">${title}</h2>

		<section class="row row-cols-1 row-cols-md-3 g-4">
			${slice_info.map(note =>`
				${UINewsAndNotes({note: note})}
			`).join('')}
		</section>

		${ShowUrl({show: show, url: url})}
	</div>

	`
}