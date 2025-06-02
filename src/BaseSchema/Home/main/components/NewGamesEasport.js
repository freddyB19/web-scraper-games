import * as values from "@root/utils/values.js"
import easportLogo from "@root/Easport/files/logo2.svg"

import { EasportNovelty } from "./EasportNovelty.js"
import { EasportUpdate } from "./EasportUpdate.js"


export const NewGamesEasport = ({ novelty = [], updates = [] }) => {

    const size_logo = (screen.width <= values.MaxWidth) ? values.SizeNormal_EasportLogo : values.SizeBig_EasportLogo

    return `	
	<div class="d-flex justify-content-center align-items-center">
		<img src="${easportLogo}" alt="Logo" width="${size_logo}">
	</div>

    ${EasportNovelty({ novelty })}
	
	${EasportUpdate({ updates })}
	`
}