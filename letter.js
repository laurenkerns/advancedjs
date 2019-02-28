const inquirer = require("inquirer");

//Letter Constructor
const Letter = function(value){
    this.value = value;
    this.guess = false;
    //if guess is true, console log the value, else return "_"
    this.showGuess = () => {
        if(this.guess === true){
            return this.value;
        } else {
            return "_";
        }
    };
//check if guess is correct against the underlying character, update boolean
//else return false
    this.guessCorrectly = (userInput) => {
        if(userInput === this.value) {
            this.guess = true;
            return true;
        } else {
            return false;
        }
    };
};



module.exports = Letter;




