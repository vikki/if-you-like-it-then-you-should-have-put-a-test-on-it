# If You Like It Then You Should Have Put A Test On It - Intern

![Intern](https://avatars0.githubusercontent.com/u/3977877?s=160)

## This branch
This is the **Custom-Actions** branch, and you're in the **intern_demo** folder, so here we'll demonstrate tests using custom asserts in intern. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).
So intern doesn't currently have a clear API for adding custom actions (though there are plans [to change this](http://www.sitepen.com/blog/2014/05/07/whats-next-for-intern/)),
but it is possible to add custom actions yourself, by creating and requiring a module that extends the remote object that's used to drive the tests
(this is the object that provides webdriver functions to the test) .
I've included very trivial examples to show you how you might add your own custom actions, either synchronous or asynchronous.
They're basically all async because intern uses promises extensively, but that's not the case for all the libraries, so I've included both examples for consistency.

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