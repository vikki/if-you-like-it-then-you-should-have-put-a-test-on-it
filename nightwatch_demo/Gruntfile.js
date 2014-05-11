/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      nightwatch: {
          options: {
              settings: {
                  "src_folders" : ["test/acceptance"],
                  "output_folder" : "kittens",
                  "custom_commands_path" : "",
                  "custom_assertions_path" : "",
                  "globals_path" : "",

                  "selenium" : {
                      "start_process" : false,
                      "server_path" : "",
                      "log_path" : "",
                      "host" : "127.0.0.1",
                      "port" : 4444
                  },

                  "test_settings" : {
                      "default" : {
                          "launch_url" : "http://localhost",
                          "selenium_port"  : 4444,
                          "selenium_host"  : "localhost",
                          "silent": true,
                          "firefox_profile": false,
                          "chrome_driver": "",
                          "ie_driver": "",
                          "screenshots" : {
                              "enabled" : false,
                              "path" : ""
                          },
                          "desiredCapabilities": {
                              "browserName": "firefox",
                              "javascriptEnabled": true,
                              "acceptSslCerts": true
                          }
                      }
                  }

              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-nightwatch');

  // Default task.
  grunt.registerTask('default', ['nightwatch']);

};
