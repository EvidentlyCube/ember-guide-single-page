module.exports = function replaceImageUrls(html) {
	console.log("Replacing image urls");
	const regex = /<img(.|\s)+?src="(.|\s)+?\/images(.+?)"(.|\s)*?>/g;
	return html.replace(regex, '<img src="images$3"/>');
};
