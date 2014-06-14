#!/bin/bash

echo 'var grammar_words = ' > ./extension/grammar.js
node ./GrammarUnNazi/words.js >> ./extension/grammar.js

echo 'var reverse_words = ' > ./extension/reverse.js
node ./GrammarNazi/words.js >> ./extension/reverse.js

echo 'var racist_words = ' > ./extension/racist.js
node ./Racial/slur.js >> ./extension/racist.js
