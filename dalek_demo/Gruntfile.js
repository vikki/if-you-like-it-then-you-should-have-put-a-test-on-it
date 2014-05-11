/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      dalek: {
          options: {
              browser: 'chrome'
          },
          dist: {
              src: ['test/acceptance/test.js']
          }
      }
  });

  // Default task.
  grunt.registerTask('default', ['dalek']);

  grunt.loadNpmTasks('grunt-dalek');

};
