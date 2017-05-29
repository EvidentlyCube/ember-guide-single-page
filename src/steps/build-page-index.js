module.exports = function buildPageIndex(yaml) {
	console.log("Building page index");

	const pages = [];

	yaml.forEach(function (section) {
		const baseUrl = section.url;

		if (baseUrl !== "index") {
			pages.push([section.title, `${baseUrl}/index`]);
		} else {
			pages.push([section.title, 'index']);
		}

		section.pages.forEach(function (page) {
			if (!page.url) {
				return;
			}

			pages.push([page.title, `${baseUrl}/${page.url}`]);
		});
	});

	return pages;
};