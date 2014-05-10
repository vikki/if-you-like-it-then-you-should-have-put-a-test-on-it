# If You Like It Then You Should Have Put A Test On It - Dalek

![Dalek](https://avatars2.githubusercontent.com/u/3217446?s=160)

## This branch
This is the **Custom-Actions** branch, and you're in the **dalek_demo** folder, so here we'll demonstrate tests using custom asserts in dalek. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).
Dalek also doesn't have an api for adding your own custom actions, but its fairly simple to add your own anyway. Also there are [plans afoot]( https://github.com/rodneyrehm/dalek-api) to add an API in future.
You can copy the examples in dalek's actions.js to figure out how it works, but sync tests just need a function that is added to the test action queue, which runs once the webdriver session is all set up.
This function returns straight away so if you want to do an async test you'll need to extend the driver also, and then resolve your promise and notify the driver when you're ready. This will make more sense if you look at the example in addTwoSync.js :)

## Running the tests
### Global Dependencies
First install the dalek CLI npm package globally:

 	npm install dalek-cli -g


Dalek doesn't need an external selenium server running, so we're all set now.

### Project dependencies
Then install the project level dependencies, specified in npm:

	npm install

### Actually running the tests
Now you're ready to actually run the tests! Do this with:
	
	npm test

Happy testing! <3