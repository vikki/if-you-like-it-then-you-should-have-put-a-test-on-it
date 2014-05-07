# If You Like It Then You Should Have Put A Test On It - Nightwatch

![Nightwatchjs](http://nightwatchjs.org/img/logo-nightwatch.png)

## This branch
This is the **Simplest-Sauce** branch, and you're in the **nightwatch** folder, so here we'll demonstrate the simplest possible Sauce Labs test you can do in nightwatch. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

## Running the tests
### Global Dependencies
Nightwatch can be installed locally or globally. I usually find it most useful to install it globally but you might want to specify it in your package.json for clarity, or making it work with a CI server or something. To install globally do this:

    npm install nightwatch -g

You don't to run your own selenium server for this to work, as nightwatch and Sauce Labs handle all of this for you :)

### Project dependencies
Right now there are no project dependencies for nightwatch, but if there were you could do this:

    npm install

### Actually running the tests
Now you're ready to actually run the tests! Do this with:
    
	npm test

Happy testing! <3