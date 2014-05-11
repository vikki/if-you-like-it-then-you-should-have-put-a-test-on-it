# If You Like It Then You Should Have Put A Test On It - Nightwatch

![Nightwatchjs](http://nightwatchjs.org/img/logo-nightwatch.png)

## This branch
This is the **Grunt** branch, and you're in the **nightwatch** folder, so here we'll demonstrate setting up **nightwatch** tests with grunt.To see what else is available go back to [master](https://github.com/vikki/ifyoulikeitthenyoushouldhaveputatestonit/tree/master).
Nightwatch doesn't bundle grunt support but there's an npm module [grunt-nightwatch](https://www.npmjs.org/package/grunt-nightwatch) that supports
setting up your tests with grunt. You use this in the normal grunt plugin way (`npm install` it, load the task in your `gruntfile`, then configure the options) - see `Gruntfile.js` for an example,
but its basically moving your `nightwatch.json` into Grunt. Unfortunately the plugin isn't working right now, as there are [some issues](https://github.com/pateketrueke/grunt-nightwatch/issues/12) with running the current version right now but hopefully these will be resolved soon :)

## Running the tests
### Global Dependencies
Nightwatch can be installed locally or globally. I usually find it most useful to install it globally but you might want to specify it in your package.json for clarity, or making it work with a CI server or something. To install globally do this:

    npm install nightwatch -g

You will also need to have a local [selenium server](http://docs.seleniumhq.org/download/) running (on the default port 4444) to get this basic test to work:

    $ java -jar ./selenium-server-standalone-<VERSION>.jar

### Project dependencies
Right now there are no project dependencies for nightwatch, but if there were you could do this:

    npm install

### Actually running the tests
Now you're ready to actually run the tests! Do this with:
    
	npm test

Happy testing! <3