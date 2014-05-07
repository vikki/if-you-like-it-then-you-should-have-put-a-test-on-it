# If You Like It Then You Should Have Put A Test On It - Intern

![Intern](https://avatars0.githubusercontent.com/u/3977877?s=160)

## This branch
This is the **Simplest-Sauce** branch, and you're in the **intern_demo** folder, so here we'll demonstrate the simplest possible real local browser(Chrome) test you can do in intern. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

## Running the tests
### Global Dependencies
Intern doesn't have any global dependencies, and it'll set up the Sauce Labs connection for you so nothing to do here!
However, if you do run the tests over and over again, the slowest part of the tests is usually setting up the Sauce Connect tunnel, so it can be more efficient to set this up once and reuse the connection.
To do this, set useSauceConnect in intern_config.js to false and set up Sauce Connect manually - see instructions [here](https://saucelabs.com/docs/connect).

### Project dependencies
Intern's runner and dependencies are setup in the package.json. To get it installed, just type:

    npm install

### Actually running the tests
Now you're ready to actually run the tests! Do this with:

	npm test

Happy testing! <3