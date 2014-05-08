# If You Like It Then You Should Have Put A Test On It - Intern

![Intern](https://avatars0.githubusercontent.com/u/3977877?s=160)

## This branch
This is the **Custom-Asserts** branch, and you're in the **intern_demo** folder, so here we'll demonstrate tests using custom asserts in intern. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).
Custom asserts are actually readily available in intern, via the this.remote.assert in tests, so this one's pretty simple - as ever see test.js for details.
Here we're adding the assertion `assertTalksAboutFeelings`, using chai as that's already available in intern.

## Running the tests
### Global Dependencies
Intern doesn't have any global dependencies, but now we need the a local selenium server running to get our tests to use local browsers. To do that :

- download [selenium server](http://docs.seleniumhq.org/download/)
- and then run it with: `$ java -jar ./selenium-server-standalone-<VERSION>.jar`

### Project dependencies
Intern's runner and dependencies are setup in the package.json. To get it installed, just type:

    npm install

### Actually running the tests
Now you're ready to actually run the tests! Do this with:

     npm test

Happy testing! <3