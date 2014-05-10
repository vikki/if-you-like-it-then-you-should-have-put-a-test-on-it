# If You Like It Then You Should Have Put A Test On It - Nightwatch

![Nightwatchjs](http://nightwatchjs.org/img/logo-nightwatch.png)

## This branch
This is the **Custom-Actions** branch, and you're in the **nightwatch** folder, so here we'll demonstrate tests using custom asserts in nightwatch. To see what else is available go back to [master](https://github.com/vikki/ifyoulikeitthenyoushouldhaveputatestonit/tree/master).
Nightwatch has a pretty friendly API set up for adding custom actions, so this one's pretty easy. Just create a module following the syntax outlined [here](http://nightwatchjs.org/guide#custom-commands),
tell the `nightwatch.json` about it under the `commands` section, and then it will be available in your tests.
There is a small gotcha here though; nightwatch doesn't use promises, so the approaches to sync and async actions are quite different - there are examples of both under commands though.
Sync is pretty simple, but often you'll want to do things asynchronously - to achieve this with nightwatch actions you'll need to have your custom action inherit from EventEmitter
and emit a 'complete' event when its finished - see addTwoAsync.js for an example.

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