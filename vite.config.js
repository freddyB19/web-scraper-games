import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: [
			{
				find: "@root",
				replacement: path.resolve(path.join(__dirname, '/src'))
			},
			{
				find: "@lol",
				replacement: path.resolve(path.join(__dirname, '/src/pages/lol'))
			},
			{
				find: "@base",
				replacement: path.resolve(path.join(__dirname, '/src/pages/base'))
			},
			{
				find: "@easport",
				replacement: path.resolve(path.join(__dirname, '/src/pages/easport'))
			},
			{
				find: "@errors",
				replacement: path.resolve(path.join(__dirname, '/src/pages/errors'))
			},
			{
				find: "@noticias",
				replacement: path.resolve(path.join(__dirname, '/src/pages/noticias'))
			},
		],
	},

})