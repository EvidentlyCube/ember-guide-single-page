const rootPath = __dirname + "/..";
const distPath = __dirname + "/../dist";
const publicPath = `${rootPath}/public`;
const srcGuidePath = rootPath + '/src-guide';

const locales = [
	'',
	'de-DE',
	'es-ES',
	'fr-FR',
	'ja-JP',
	'pt-BR',
	'ru-RU',
	'zh-CN',
];

const pagesYaml = require('./steps/read-pages-yaml')(`${srcGuidePath}/data/pages.yml`);
const pagesIndex = require('./steps/build-page-index')(pagesYaml);

locales.forEach(function(locale){
	console.log("");
	console.log(" ## Building locale", locale ? locale : "en-EN");

	const localeSuffix = locale ? `.${locale}` : '';
	const pagesHtmls = require('./steps/compile-pages')(pagesIndex, `${srcGuidePath}/source/localizable`, localeSuffix);

	let finalHtml = require('./steps/concat-pages')(pagesHtmls);
	finalHtml = require('./steps/prepare-image-urls')(finalHtml);

	require('./steps/save-to-file')(publicPath, finalHtml, `${distPath}/index${localeSuffix}.html`);
});

require('./steps/copy-images')(srcGuidePath, distPath);

console.log("Done ¯\\_(ツ)_/¯");
