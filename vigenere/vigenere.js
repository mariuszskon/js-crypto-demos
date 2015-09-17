// vigenere.js

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getKeyLetterAlphabetPosition(number, key) { // take number as the position of the input letter, so that we can match it with a key letter
    var keyLetterPosition = number % key.length; // % uses modular arithmetic to "loop around", matching a number to the key letter position
    
    var keyLetterAtPosition = key.charAt(keyLetterPosition);
    
    return alphabet.indexOf(keyLetterAtPosition);
}

function crypt(mode, input, key) {
    var finaloutput = "";
    
    for (var i = 0; i < input.length; i++) {
        
        if (input.charAt(i) == "\n") {
            
            continue; // it's a newline: we don't need to keep going - go straight to the next letter
            
        }
        
        var inputLetterPosition = alphabet.indexOf(input.charAt(i));
        
        var finalLetterPosition = "";
        
        if (mode === true) { // encryption mode
            
            finalLetterPosition = (inputLetterPosition + getKeyLetterAlphabetPosition(i, key)) % alphabet.length; // add the position of the original letter with the alphabet position of the corresponding key letter, and wrap around the alphabet length
            
        } else if (mode === false) { // decryption mode
            
            var possibleLetterPosition = (inputLetterPosition - getKeyLetterAlphabetPosition(i, key));
            
            if (possibleLetterPosition < 0) {
                finalLetterPosition = possibleLetterPosition + alphabet.length; // if the number is negative, "loop around" by adding the length of the alphabet to it
            } else {
                finalLetterPosition = possibleLetterPosition;
            }
            
        }
        
        finaloutput += alphabet[finalLetterPosition]; // get the actual letter and add it to the finaloutput
        
    }
    
    return finaloutput;
    
}

