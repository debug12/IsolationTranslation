#!/bin/bash

node ./GrammarUnNazi/words.js > ./extension/grammar.js
node ./filter.js grammar.js

node ./GrammarNazi/words.js > ./extension/reverse.js
node ./filter.js reverse.js

node ./Racial/slur.js > ./extension/racist.js
node ./filter.js racist.js

node ./Doge/doge.js > ./extension/doge.js
node ./filter.js doge.js

node ./Nouns/noun.js > ./extension/noun.js
node ./filter.js noun.js
