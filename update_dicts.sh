#!/bin/bash

echo 'var grammar_words = ' > ./extension/grammar.js
node ./GrammarUnNazi/words.js >> ./extension/grammar.js

echo 'var reverse_words = ' > ./extension/reverse.js
node ./GrammarNazi/words.js >> ./extension/reverse.js
