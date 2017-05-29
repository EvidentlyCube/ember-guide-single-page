module.exports = function buildPageIndex(pagesData) {
	console.log("Concatenating pages");
	return pagesData.map(data => `<article class="page"><h1>${data[0]}</h1>${data[1]}</article>`).join('');
};