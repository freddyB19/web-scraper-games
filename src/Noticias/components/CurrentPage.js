export const NewsCurrentPage = ({ section }) => {
    return `
	<nav class="my-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
	  <ol class="breadcrumb">
	    <li class="breadcrumb-item"><a href="#/noticias">Noticias</a></li>
	    <li class="breadcrumb-item active" aria-current="page">${section}</li>
	  </ol>
	</nav>

	`
}