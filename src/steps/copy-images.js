module.exports = function copyImages(srcGuidePath, distPath) {
	console.log("Copying images");

	const copydir = require('copy-dir');

	copydir.sync(`${srcGuidePath}/source/images`, `${distPath}/images`);
};