export const Banner = ({news}) => {
	return `
	<div id="banner-news" class="mt-3">
		<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="min-height: 300; max-height: 400; autoplay: true; ratio: 16:9; animation: scale">
		    <div class="uk-slideshow-items">
		    ${news.map(note =>`
		    	<div>
		            <img src="${note.imagen}" alt="" uk-cover>
		            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
		                <h3 class="uk-margin-remove">${note.titulo}</h3>
		            </div>
		        </div>
		    `).join('')}
		        
		    </div>

		    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
		    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

		</div>
	</div>
	`
}