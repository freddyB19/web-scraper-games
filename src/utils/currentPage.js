import { MaxWidth, DefaultSizeLogo } from "@root/utils/values.js"

export const CurrentPage = ({logo = "", logo_w = "50",page = 'Actual'}) => {
	const size_logo = (screen.width <= MaxWidth)? DefaultSizeLogo : logo_w
	return `
	<div class="d-flex justify-content-center justify-content-md-start align-items-center">
		<div class="d-flex align-items-center">
			<div class="flex-shrink-0">
				<img src="${logo}" alt="Logo" width="${size_logo}" class="d-inline-block align-text-top">
			</div>
			<div class="flex-grow-1 ms-1">
				<h1 class="${(screen.width <= MaxWidth) ? "fs-3": "display-3"} mb-0">${page}</h1>	
			</div>	
		</div>      	
  	</div>
	<hr>
	<div class="mb-4"></div>
	`
}