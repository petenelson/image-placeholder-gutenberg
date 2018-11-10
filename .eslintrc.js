module.exports = {
	"parser": "babel-eslint",
	"plugins": [
		"react"
	],
	"ecmaFeatures": {
		"jsx": true,
		"modules": true
	},
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"yoda": [ 2 ],
		"indent": [ 2, "tab", { "SwitchCase": 2 } ],
		"linebreak-style": [ 2, "unix" ],
		"quotes": [ 2, "single" ],
		"semi": [ 2, "always" ],
		"space-in-parens": [ 2, "always" ],
		"no-console": [ 1 ],
		"no-alert": [ 1 ],
		"camelcase": [ 2 ],
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2
	},
	"globals": {
		"jQuery": true,
		"wp": true,
		"googletag": true,
		"ga": true,
		"CC_Slideshow": true,
		"ajaxurl": true,
		"tinymce": true,
		"Backbone": true,
		"quicktags": true,
		"WPData": true,
		"CCEmailShare": true
	}
}
