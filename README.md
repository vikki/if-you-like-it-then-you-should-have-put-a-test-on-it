# If You Like It Then You Should Have Put A Test On It - Front End Acceptance Test Frameworks Comparison

This repo is for the purposes of comparing front end acceptance test frameworks, as there are a few out there now, and they're all similar but different, and TBH I was having trouble keeping track :P This isn't here to keep score or find the *best* one; I genuinely think they're all pretty great, and this is a problem that is very much worth solving, and hugely appreciate the work that's gone into them all. However some might suit your use-case more than others, and I hadn't found that [spelt](http://english.stackexchange.com/questions/5712/spelt-vs-spelled) out anywhere, so I thought I'd made one. Enormously inspired by [TodoMVC](https://github.com/tastejs/todomvc).

Currently tracking :

- [dalekjs](http://dalekjs.com)
- [theintern](http://theintern.io)
- [nightwatchjs](http://nightwatchjs.org)

Each library I've covered has a folder at the top level, with all the tests I have available under there. As testing setup can be a bit complicated, with Grunt/Gulp/Broccoli setup jazz, framework config files, and dependent resources, I will add feature branches for each task, so its easier to see how to replicate a particular setup.

Check [the branches](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/branches) for the most up-to-date list of example config, but I will try to keep this list up to date.

Example Branches: 

- [simplest](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplest)
  : Absolute simplest possible default test
- [simplestWithInteraction](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplestWithInteraction)
  : Absolute simplest possible default test including an interaction (very similar to simplest)
- [simplestHeadless](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplestHeadless)
  : Running tests against a headless browser (phantom)
- [simplestRealBrowser](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplestRealBrowser)
  : Running tests against a real local browser (chrome)
- [simplestSauce](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplestSauce)
  : Running tests against Sauce Labs
- [simplestCI_dalek](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplestCI_dalek)
  : CI setup with dalek
- [simplestCI_intern](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplestCI_intern)
  : CI setup with intern
- [simplestCI_nightwatch](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/simplestCI_nightwatch)
  : CI setup with nightwatch
- [grunt](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/grunt)
  : Hooking up test config with grunt
- [customActions](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/customActions)
  : Creating custom actions
- [customAsserts](https://github.com/vikki/if-you-like-it-then-you-should-have-put-a-test-on-it/tree/customAsserts) 
  : Creating custom assertions


