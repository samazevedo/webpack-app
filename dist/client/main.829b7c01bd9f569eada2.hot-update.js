/*! For license information please see main.829b7c01bd9f569eada2.hot-update.js.LICENSE.txt */
self.webpackHotUpdatemy_webpack_project(
	'main',
	{
		'./src/client/ts/index.ts': () => {
			throw new Error(
				"Module parse failed: Unterminated regular expression (41:20)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n| var render = function () { return renderer.render(scene, camera); };\n| animate()\n>     < h1 > HELLO < /h1>(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\n// CHECK MODE and SERVICE WORKER\\nif (process.env.NODE_ENV === 'production') {\\n    console.log('Production mode!!!')\\n} else if (process.env.NODE_ENV === 'development') {\\n    console.log('Development mode')\\n}\\nif ('serviceWorker' in navigator) {\\n    window.addEventListener('load', () => {\\n        navigator.serviceWorker\\n            .register('/service-worker.js')\\n            .then((registration) => {\\n                console.log('SW registered: ', registration)\\n            })\\n            .catch((registrationError) => {\\n                console.log('SW registration failed: ', registrationError)\\n            })\\n    })\\n}\\n\"], [\"\\n\\n// CHECK MODE and SERVICE WORKER\\nif (process.env.NODE_ENV === 'production') {\\n    console.log('Production mode!!!')\\n} else if (process.env.NODE_ENV === 'development') {\\n    console.log('Development mode')\\n}\\nif ('serviceWorker' in navigator) {\\n    window.addEventListener('load', () => {\\n        navigator.serviceWorker\\n            .register('/service-worker.js')\\n            .then((registration) => {\\n                console.log('SW registered: ', registration)\\n            })\\n            .catch((registrationError) => {\\n                console.log('SW registration failed: ', registrationError)\\n            })\\n    })\\n}\\n\"])));\n| var templateObject_1;\n| "
			);
		}
	},
	function (e) {
		e.h = () => 'c3324447436f7668782a';
	}
);
