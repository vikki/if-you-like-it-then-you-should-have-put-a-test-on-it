# If You Like It Then You Should Have Put A Test On It - Dalek

![Dalek](https://avatars2.githubusercontent.com/u/3217446?s=160)

## This branch
This is the **Simplest-Headless** branch, and you're in the **dalek_demo** folder, so here we'll demonstrate the simplest possible headless browser test you can do in dalek. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

## Running the tests
### Global Dependencies
First install the dalek CLI npm package globally:

 	npm install dalek-cli -g

 We'll be using phantomjs as our headless browser, and Dalek can spawn phantom automatically, so you don't need to start it up yourself - it should all just work (famous last words I know!).

### Project dependencies
Then install the project level dependencies, specified in npm:

	npm install

### Actually running the tests
Now you're ready to actually run the tests! Do this with:
	
	npm test

Happy testing! <3