# If You Like It Then You Should Have Put A Test On It - Intern

![Intern](https://avatars0.githubusercontent.com/u/3977877?s=160)

## This branch
This is the **Simplest-Headless** branch, and you're in the **intern_demo** folder, so here we'll demonstrate the simplest possible headless test you can do in intern. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

## Running the tests
### Global Dependencies
Intern doesn't have any global dependencies, but you will need to have phantomjs installed. Phantomjs is available to installed via npm or homebrew/apt/yum etc., but x-platform the following works:

	npm install -g phantomjs

### Project dependencies
Intern's runner and dependencies are setup in the package.json. To get it installed, just type:

    npm install

### Actually running the tests
Now you're ready to actually run the tests! Do this with:

	npm test

The output here is a little crazy, because we need to start the phantom server, wait for it to get set up, and then run the tests against it. This means that the output includes all of the logging from phantom, and all of the logging from intern, muddled together. To get around this you can run the command separately, either in different tabs, or piping the output to files however you see fit, or you can use a build tool like Grunt to handle this stuff for you.

To start the server, run:

	phantomjs --webdriver 4444 --webdriver-loglevel='debug'

and once that's set up, run the tests with:

	node node_modules/intern/runner.js config=intern_config.js"

Happy testing! <3