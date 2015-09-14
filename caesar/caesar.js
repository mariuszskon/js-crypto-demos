// A Caesar cipher implementation with support for custom alphabets

var inputtext;
var key;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var origalphabet = alphabet;
var upperbet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowandup = origalphabet.concat(upperbet);
var alphanumeric = lowandup.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

function gid(a) {
    return document.getElementById(a);
}

var plaintextbox = gid("plaintextbox");

var keybox = gid("keybox");

var outputbox = gid("outputbox");

function updatevars() {
    
    inputtext = plaintextbox.value;
    key = parseInt(keybox.value);
    
}

function crypt(mode) {
    
    updatevars();
    
    var outputtext = "";
    
    if (key < 1 || key > (alphabet.length - 1)) {
        outputtext = "Error: key was lower than 1 or greater than " + (alphabet.length - 1);
        outputbox.innerHTML = outputtext;
        return; // end the function
    }
    
    for (var i = 0; i < inputtext.length; i++) { // loop through all of the inputtext
        
        var position = alphabet.indexOf(inputtext.charAt(i));
        var l;
        
        if (mode === true) { // encryption mode
            l = position + key;
            
            l = l % alphabet.length;
        }
        
        if (mode === false) { // decryption mode
            l = position - key;
            
            if (l < 0) {
                
                l = l + alphabet.length;
                
            }
        }
        outputtext += alphabet[l]; // put the outputtext letter in the ciphertext
 
    }
    
    outputbox.innerHTML = outputtext; // finally put it in the output box
    
}

function encrypt() {
    crypt(true);
}

function decrypt() {
    crypt(false);
}

document.getElementById("encryptbtn").addEventListener("click", encrypt);

document.getElementById("decryptbtn").addEventListener("click", decrypt);
