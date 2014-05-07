# If You Like It Then You Should Have Put A Test On It - Dalek

![Dalek](https://avatars2.githubusercontent.com/u/3217446?s=160)

## This branch
This is the **Simplest-Sauce** branch, and you're in the **dalek_demo** folder, so here we'll demonstrate the simplest possible Sauce Labs browser test you can do in dalek. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

## Running the tests
### Global Dependencies
First install the dalek CLI npm package globally:

 	npm install dalek-cli -g

### Project dependencies
Then install the project level dependencies, specified in npm:

	npm install

n.b. We've started using Dalekfile.json to define our dalek config, because we need more info now. Some of this info is Sauce Labs credentials - I've blanked mine out because, well, it isn't free, but it is pretty cool, so if you'd like to try it out, get set up at [SauceLabs.com](https://saucelabs.com/home) and replace `driver.sauce.user` and `driver.sauce.key` with your dets!

### Actually running the tests
Now you're ready to actually run the tests! Do this with:
	
	npm test

Happy testing! <3