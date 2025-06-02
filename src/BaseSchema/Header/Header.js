import { HeaderNav } from './HeaderNav.js'
import { Banner } from './Banner.js'

export const Header = ({ pages }) => {
    const urls = pages.map((data) => {
        const url = {
            name: data.pagina.nombre,
        }

        if (data.pagina.nombre === 'noticias') {
            /*if (data.pagina.info.pagina)*/
            url['urls'] = data.pagina.info
                .filter(noticiero => noticiero.pagina)
                .map(
                    noticiero => noticiero.nombre
                )
        }

        return url
    })

    // TODO: Tengo que tratar de mejorar este código
    const images_news = pages.find(
        (data) => data.pagina.nombre == 'noticias'
    ).pagina.info.filter((web) => {
        if (web.nombre == 'marca' || web.nombre == 'lanacion')
            return web
    }).map((data) => {
        return data.pagina[data.pagina.length - 1]
    })

    const images_easport = pages.find((data) => data.pagina.nombre == 'easport')
    const data_easport = images_easport.pagina.info.noticias.slice(
        images_easport.pagina.info.noticias.length - 3, images_easport.pagina.info.noticias.length - 1
    )

    const banner_news = [...images_news, ...data_easport]

    return `
        ${Banner({news: banner_news})}
        <br>
        ${HeaderNav({urls: urls})}
    `
}