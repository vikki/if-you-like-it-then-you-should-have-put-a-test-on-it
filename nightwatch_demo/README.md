# If You Like It Then You Should Have Put A Test On It - Nightwatch

![Nightwatchjs](http://nightwatchjs.org/img/logo-nightwatch.png)

## This branch
This is the **Custom-Asserts** branch, and you're in the **nightwatch** folder, so here we'll demonstrate tests using custom asserts in nightwatch. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

There are actually a few ways of adding custom assertions - I've demo-ed the more complicated, more powerful version, but either works.
Actions take callbacks which may contain assertions, which is a really simple way of adding new custom assertions, or you can extend the assert api using custom assertions.
To add a custom assertion:
  - Use the pattern [here](http://nightwatchjs.org/guide#custom-assertions) to create a custom assertion - we did that in this repo with `talksAboutFeelings.js` (which checks that the given element's text includes "feelings" :P)
  - Register it under `custom_assertions_path` in `nightwatch.json`
  - Use it in your tests - so if you created assertions/likesTesting.js that would wind up being test.assert.likesTesting()

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