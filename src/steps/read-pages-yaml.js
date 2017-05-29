module.exports = function fetchPagesYaml(path) {
	console.log("Reading pages.yml");

	const fs = require('fs');
	const yaml = require('js-yaml');

	return yaml.safeLoad(fs.readFileSync(path, 'utf8'));
};