const Letter = require("./letter");

//constructor for word
//function should return string representing the work
//call function on each letter object (show guess function)
const Word = function(myWord){
    this.letterArray = [];
    this.stringFunc = function() { 
        for (var i = 0; i < myWord.length; i++) {
            var letter = new Letter(myWord[i]);
            this.letterArray.push(letter);
        };
    };

    //function that takes characters as an argument
    //calls the guess function on each letter object (guessCorrectly function)
    this.guess = function() {
        for (var i = 0; i < this.letterArray.length; i++){
            
        }

    };
}