const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
		join(
			__dirname,
			'../../libs/core/common-ui/**/!(*.stories|*.spec).{ts,html}'
		),
		...createGlobPatternsForDependencies(__dirname)
	],
	theme: {
		extend: {
			colors: {
				muted: '#575757',
				primary: '#498553',
				'primary-dark': '#23301C',
				secondary: '#E9F3EC'
			}
		}
	},
	plugins: []
}
