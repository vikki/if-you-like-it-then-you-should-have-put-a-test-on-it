# If You Like It Then You Should Have Put A Test On It - Dalek

![Dalek](https://avatars2.githubusercontent.com/u/3217446?s=160)

## This branch
This is the **Grunt** branch, and you're in the **dalek_demo** folder, so here we'll demonstrate setting up **dalek** tests with grunt. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).
Dalek doesn't have built in support for grunt but there is a separately developed plugin - [grunt-dalek](https://www.npmjs.org/package/grunt-dalek), which works well.
To use it, just `npm install grunt-dalek`, load the npm task in the gruntfile, and configure your new dalek task as described in [the readme](https://www.npmjs.org/package/grunt-dalek).
To see a really simple example checkout my `Gruntfile.js`.

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