module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
	    install: {
	       //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
	    }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },  	

	  jshint: {
	     all: ['www/js/**/*.js'],
       options: {
        ignores: ['Gruntfile.js', 'www/js/libs/**/*.js'],
        smarttabs:true,regexdash:false,regexp:false,bitwise:false,eqeqeq:true,latedef:true,newcap:true,curly:true,jquery:true,rhino:true
      },       
	  }

   //  uglify: {
   //    options: {
   //      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
   //    },
   //    build: {
   //      src: 'js/<%= pkg.name %>.js',
   //      dest: 'build/<%= pkg.name %>.min.js'
   //    }
   //  }
  });

  // Load the plugin that provides the "uglify" task.
 // grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-jshint');  
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // tasks
  grunt.registerTask('init', ['bower', 'compass']);
  grunt.registerTask('deploy', ['compass', 'jshint'/*, 'qunit'*/]);

};