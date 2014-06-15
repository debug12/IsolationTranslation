#!/bin/bash

echo 'var grammar_words = ' > ./extension/grammar.js
node ./GrammarUnNazi/words.js >> ./extension/grammar.js

echo 'var reverse_words = ' > ./extension/reverse.js
node ./GrammarNazi/words.js >> ./extension/reverse.js

echo 'var racist_words = ' > ./extension/racist.js
node ./Racial/slur.js >> ./extension/racist.js

echo 'var doge_words = ' > ./extension/doge.js
node ./Doge/doge.js >> ./extension/doge.js

echo 'var noun_words = ' > ./extension/noun.js
node ./Nouns/noun.js >> ./extension/noun.js
