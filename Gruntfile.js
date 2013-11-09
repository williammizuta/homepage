module.exports = function(grunt) {
	
	grunt.initConfig({
		copy: {
			homepage: {
				expand: true,
				src: ["*.html", "css/**", "js/**"],
				dest: "production"
			}
		},
		clean: ["production"],
		useminPrepare: {
			html: ['production/*.html'],
			options: {
				dest: "production"
			}
		},
		usemin: {
			html: ['production/*.html']
		},
		uglify: {
			generated: {
				options: {
					report: 'gzip'
				}
			}
		},
		cssmin: {
			generated: {
				options: {
					report: 'gzip'
				}
			}
		},
		imagemin: {
			homepage: {
				expand: true,
				cwd: 'production/img',
				src: '**/*.{png,jpg,gif}',
				dest: 'production/img'
			}
		},
		htmlmin: {
			homepage: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					report: 'gzip'
				},
				expand: true,
				cwd: 'production',
				src: ['**/*.html'],
				dest: 'production'
			}
		}

	});

	grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'htmlmin']);
	grunt.registerTask("default", ["clean", "copy", "minifica"]);

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
}
