import pages from  "@root/result.json"

import { getHash } from "@root/utils/getHash.js"
import { getData } from "@root/utils/getData.js"


// Rutas
import { Index, Header, Footer } from "@base/main.js"
import { Error404 } from "@errors/main.js"

// LOL
import { LOL } from "@lol/main.js"
import { urlpatterns } from "@lol/components/nav.js"
import { LOLChampions } from "@lol/pages/campeones/main.js"
import { LOLStadistics } from "@lol/pages/estadisticas/main.js"
import { LOLNews, LOLNotes } from "@lol/pages/noticias_notas/main.js"


//Easport
import { Easport } from "@easport/main.js"
import { EasportNews } from "@easport/pages/noticias/main.js"
import { EasportFreeGames } from "@easport/pages/juegos/main.js"
import { EasportNovelty } from "@easport/pages/novedades/main.js"
import { EasportUpdates } from "@easport/pages/actualizaciones/main.js"

// Noticias
import { News } from "@noticias/main.js"
import { Marca } from "@noticias/marca/main.js"
import { Lanacion } from "@noticias/lanacion/main.js"
import { DecryptTechnology, DecryptIA } from "@noticias/decrypt/main.js"
import { ElNacionalTech, ElNacionalIA } from "@noticias/elnacional/main.js"


const routes = {
  "/": Index,
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
