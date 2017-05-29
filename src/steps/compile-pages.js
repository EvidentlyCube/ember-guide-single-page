module.exports = function buildPages(pagesIndex, pagesRootPath, localeSuffix) {
	console.log("Compiling pages' markdown");

	const marked = require('marked');
	const fs = require('fs');

	const pages = [];
	pagesIndex.forEach(function (pageData) {
		const [title, pageName] = pageData;

		const filePath = `${pagesRootPath}/${pageName}${localeSuffix}.md`;
		try {
			const markdown = fs.readFileSync(filePath, 'utf8');
			pages.push([title, marked(markdown)]);
		} catch (e) {
			// Silently ignore, intended
		}
	});

	return pages;
};
