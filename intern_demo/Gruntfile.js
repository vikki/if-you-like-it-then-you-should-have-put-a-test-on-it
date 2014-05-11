/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      intern: {
          acceptance: {
              options: {
                  config: "intern_config.js",
                  runType: "runner"
              }
          }
      }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('intern');
  // Default task.
  grunt.registerTask('default', ['intern']);

};
