import { getHash } from "@root/utils/getHash.js"
import { getData } from "@root/utils/getData.js"


// Rutas
import { Error404 } from "@root/BaseSchema/Errors/404.js"
import { Header } from "@root/BaseSchema/Header/Header.js"
import { Home } from "@root/BaseSchema/Home/Home.js"
import { Footer } from "@root/BaseSchema/Footer/Footer.js"

// LOL
import { LOL } from "@root/LOL/LOL.js"
import { URLPatterns } from "@root/LOL/components/URLPatterns.js"
import { LOLChampions } from "@root/LOL/pages/champions/LOLChampions.js"
import { LOLStadistics } from "@root/LOL/pages/stadistics/LOLStadistics.js"
import { LOLNews, LOLNotes } from "@root/LOL/pages/news_notes/NewsNotes.js"


//Easport
import { Easport } from "@root/Easport/Easport.js"
import { EasportNews } from "@root/Easport/pages/news/EasportNews.js"
import { EasportFreeGames } from "@root/Easport/pages/games/EasportFreeGames.js"
import { EasportNovelty } from "@root/Easport/pages/novelty/EasportNovelty.js"
import { EasportUpdates } from "@root/Easport/pages/updates/EasportUpdates.js"


// Noticias
import { News } from "@root/Noticias/News.js"
import { Marca } from "@root/Noticias/pages/marca/Marca.js"
import { Lanacion } from "@root/Noticias/pages/lanacion/LaNacion.js"
import { DecryptTechnology } from "@root/Noticias/pages/decrypt/DecryptTech.js"
import { DecryptIA } from "@root/Noticias/pages/decrypt/DecryptIA.js"
import { ElNacionalIA } from "@root/Noticias/pages/elnacional/ElNacionalIA.js"
import { ElNacionalTech } from "@root/Noticias/pages/elnacional/ElNacionalTech.js"

import * as data_json from "@root/result.json"

const routes = {
    "/": Home,
    "lol": LOL,
    "lol_champions": LOLChampions,
    "lol_estadisticas": LOLStadistics,
    "lol_noticias": LOLNews,
    "lol_notas": LOLNotes,
    "easport": Easport,
    "easport_noticias": EasportNews,
    "easport_juegos": EasportFreeGames,
    "easport_novedades": EasportNovelty,
    "easport_actualizaciones": EasportUpdates,
    "noticias": News,
    "marca": Marca,
    "lanacion": Lanacion,
    "decrypt_tecnologia": DecryptTechnology,
    'decrypt_ia': DecryptIA,
    'elnacional_tecnologia': ElNacionalTech,
    'elnacional_ia': ElNacionalIA,
}

export const Routes = async ({}) => {
    const responsePages = await getData()
    const route = getHash()

    const renderHTML = routes[route] ? routes[route] : Error404

    return `
    ${await Header({pages: responsePages})}
    <br><br>
    ${await renderHTML({pages: responsePages})}
    <br><br>
    ${await Footer({})}
  `
}