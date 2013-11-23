module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
	    install: {
	       //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
	    }
  	},
  	
	jshint: {
	    all: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js']
	  },    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};