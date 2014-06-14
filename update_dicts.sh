#!/bin/bash

echo 'var grammar_words = ' > ./extension/grammar.js
node ./GrammarUnNazi/words.js >> ./extension/grammar.js

echo 'var reverse_words = ' > ./extension/reverse.js
node ./GrammarNazi/words.js >> ./extension/reverse.js

echo 'var racial_words = ' > ./extension/racial.js
node ./Racial/slur.js >> ./extension/racial.js

echo 'var doge_words = ' > ./extension/doge.js
node ./Doge/doge.js >> ./extension/doge.js
