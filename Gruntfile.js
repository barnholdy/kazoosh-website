module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['content/**'],
				tasks: ['shell:mdToJson']
			},
		},
		shell: {
			mdToJson: {
				command: [
					'ls content/home/* | xargs node node_modules/markdown-to-json/bin/m2j -w 1000000000 -o public_html/content/home.json',
					'ls content/projekte/* | xargs node node_modules/markdown-to-json/bin/m2j -w 1000000000 -o public_html/content/projekte.json',
					'ls content/teilnehmer/* | xargs node node_modules/markdown-to-json/bin/m2j -w 1000000000 -o public_html/content/teilnehmer.json',
					'ls content/other/* | xargs node node_modules/markdown-to-json/bin/m2j -w 1000000000 -o public_html/content/other.json'
				].join('&&')
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	

	// Default task(s).
	grunt.registerTask('observe', ['watch']);
	grunt.registerTask('content', ['shell:mdToJson']);
};