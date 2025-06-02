export const ShowUrl = ({ show, url }) => {
    return `
		${
			(show)
			? `
				<div class="mt-3">
					<a class="ink-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#/${url}">Ver más</a>
				</div>
			`
			: ''
		}
	`
}