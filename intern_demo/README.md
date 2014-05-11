# If You Like It Then You Should Have Put A Test On It - Intern

![Intern](https://avatars0.githubusercontent.com/u/3977877?s=160)

## This branch
This is the **Grunt** branch, and you're in the **intern_demo** folder, so here we'll demonstrate setting up **intern** tests with grunt. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).
Intern has built-in support for grunt, which makes this really easy :)
To get it working, all you need to do is load intern in your `gruntfile`, and tell the config where your intern config file is, and what kind of run you'd like to do (client or runner).
There's more that can be configured, but that's all that's required to get something up and running - see [the docs](https://github.com/theintern/intern/wiki/Using-Intern-with-Grunt) for more details.


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