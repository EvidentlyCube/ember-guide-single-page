module.exports = function saveToFile(publicPath, finalHtml, fileName){
	console.log("Saving file");

	const fs = require('fs');
	const templateHtml = fs.readFileSync(`${publicPath}/index.html`, 'utf8');
	finalHtml = templateHtml.replace('<!--CONTENT-->', finalHtml);

	fs.writeFileSync(fileName, finalHtml, 'utf8')
};