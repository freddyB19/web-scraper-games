import { urlpatterns } from "./nav.js"
import { ShowUrl } from "./show_url.js"

// rounded-circle
const Table = ({champions}) => {
	return `
		<div class="uk-overflow-auto">
		    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
		        <thead>
		            <tr>
		                <th class="uk-table-shrink"></th>
		                <th class="uk-table-shrink">Champion</th>
		                ${champions[2].estadisticas.map(info =>
							`
							<th class="uk-table-shrink">${info[0]}</th>
							`
						).join('')}
		            </tr>
		        </thead>
		        <tbody>
			        ${champions.map(champion =>`
						<tr>
							<td class="uk-table-link"><a class="uk-table-link" href="${champion.url}" target="_blank">${champion.nombre}</a></td>
							<td><img class="ratio-card uk-preserve-width uk-border-circle"  src="${champion.imagen}" width="50" alt=""></td>

							${champion.estadisticas.map(data =>
								`
								<td>
									${data[1]}
								</td>
								`
							).join('')}
						</tr>
					`).join('')}
		        </tbody>
		    </table>
		</div>

	`
}

export const Statistics = ({champions, show = true}) => {
	return `
	<div class="mt-5">
		<h2 class="display-4 text-center mb-3">Estadísticas</h2>
		
		${Table({champions: champions})}
		
		${ShowUrl({show: show, url: urlpatterns.estadisticas})}

	</div>	
	`
}
