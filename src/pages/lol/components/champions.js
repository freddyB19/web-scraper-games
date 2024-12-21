import { urlpatterns } from "./nav.js"
import { ShowUrl } from "./show_url.js"
import lolLogo from "./lol3.svg"

export const Champions = ({champions, show = true}) => {
	return `
	<div class="mt-3 mb-3">
		<h2 class="display-4 text-center mb-3">Campeones</h2>

		<section class="mb-3 row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4" uk-grid="parallax: 0; parallax-justify: true; masonry: pack">
			${champions.map(champion =>
				`
				<article>
					<div class="uk-inline-clip uk-transition-toggle h-75 w-100" tabindex="0">			            
			            <img src="${
			            	(champion.imagen) != 'null'
							? champion.imagen
							: lolLogo
			            }" class="ratio-card card-img rounded w-100 h-100" width="100%" style="max-width: 100%;" alt="">
			            <div class="rounded uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
			                <h4 class="uk-h4 uk-margin-remove">
			                	<div class="bg-dark bg-opacity-75 p-2 rounded">
			                		<a class="link-light" href="${champion.url}" target="_blank">${champion.champion}</a>
			                	</div>
			                </h4>
			            </div>
			        </div>
				</article>
				`
			).join('')}
		</section>
		<div class="mt-5"></div>
		${ShowUrl({show: show, url: urlpatterns.champions})}
		
	</div>	
	`
}