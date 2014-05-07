# If You Like It Then You Should Have Put A Test On It - Intern

![Intern](https://avatars0.githubusercontent.com/u/3977877?s=160)

## This branch
This is the **Simplest-With-Interaction** branch, and you're in the **intern_demo** folder, so here we'll demonstrate the simplest possible interaction test you can do in intern. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

## Running the tests
### Global Dependencies
Intern doesn't have any global dependencies, so nothing to do here. Use the time to acquire some snacks, I'm sure you will need sustenance for writing all these tests :)

### Project dependencies
Intern's runner and dependencies are setup in the package.json. To get it installed, just type:

    npm install

Intern will by default run against [Sauce Labs](saucelabs.com), so you will need to put your username and access key for SauceLabs in the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

### Actually running the tests
Now you're ready to actually run the tests! Do this with:
    
	npm test

Happy testing! <3