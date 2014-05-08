# If You Like It Then You Should Have Put A Test On It - Intern

![Intern](https://avatars0.githubusercontent.com/u/3977877?s=160)

## This branch
This is the **Simplest-CI** branch, and you're in the **intern_demo** folder, so here we'll demonstrate the simplest possible CI Server (travis) test you can do in intern. To see what else is available go back to [master](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/master).

## Running the tests
So to run these tests, things are a bit different. Once we're setup, all that needs to be done, is to push to the appropriate GH repo, and let the Travis webhook work its magic.
To get set up:

- Sign into travis with your Github credentials, either on [travis for public repos](https://travis-ci.org) or [travis for private repos](https://travis-ci.com/)
- Go to your profile page (click on your username in the top right), and enable Travis integration on the repo that you want to test by flicking the switch
- You will need to update this project's `.travis.yml` with your own credentials for sauce labs. Username and access key live under `env.global` (as 2 somewhat obscure `secure: dfjkdghdfk` type entries), so delete those, and then to add yours:

  - Ensure ruby installed
  - Install the travis gem


            $ gem install travis


  - Login to travis - this is because you will be encrypting stuff using keys associated with your github login.
  This will prompt for your username, pw + two factor auth code if you have that setup :)


            $ travis login —pro


  - Encrypt your $SAUCE_USERNAME and $SAUCE_ACCESS_KEY env vars, using GH keys, and add it to your travis yml as a global environment variable - awesome, non?


            $ travis encrypt SAUCE_ACCESS_KEY="IMA-SAUCE-KEY" --add env.global
            $ travis encrypt SAUCE_USERNAME="sauceuserperson"  --add env.global


Once that's all done and your .travis.yml is checked in, you just need to push to GH and travis should pick up the build and run `npm install`, then `npm test`, running your tests against sauce labs - whoo!


Happy testing! <3