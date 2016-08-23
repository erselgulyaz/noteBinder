module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		connect: {
			server: {
				options: {
					hostname: "localhost",
					port: 3000,
					base: "dev",
					livereload: true,
					open: true
				}
			}
		},
		sass: {
			dev: {
				files: {
					"dev/src/css/noteBinder.css" : "dev/src/scss/noteBinder.scss",
					"dev/others/style.css" : "dev/others/style.scss"
				},
				options: {
					sourceComments: true
				}
			},
			prod: {
				files: {
					"dev/src/css/noteBinder.css" : "dev/src/scss/noteBinder.scss",
					"dev/others/style.css" : "dev/others/style.scss"
				},
				options: {
					outputStyle: "compressed"
				}
			}
		},
		uglify: {
			dev: {
				files: {
					"dev/src/js/noteBinder.min.js": "dev/src/js/noteBinder.js"
				},
				options: {
					beautify: true
				}
			},
			prod: {
				files: {
					"dev/src/js/noteBinder.min.js": "dev/src/js/noteBinder.js"
				},
				options: {
					banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %> */\n"
				}
			}
		},
		watch: {
			files: {
				files: "dev/**/*.{html,css,js}",
				options: {
					livereload: true
				}
			},
			scss: {
				files: "dev/**/*.scss",
				tasks: ["sass:dev"]
			},
			js: {
				files: "dev/**/*.js",
				tasks: ["newer:uglify:dev"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-newer");

	grunt.registerTask("default", ["connect", "watch"]);
	grunt.registerTask("prod", ["sass:prod", "uglify:prod"]);
};