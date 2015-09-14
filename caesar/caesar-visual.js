var inputtext;
var key;

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

function visualcrypt(mode) {
    updatevars();
    outputbox.innerHTML = crypt(mode, inputtext, key);
}

function encrypt() {
    visualcrypt(true);
}

function decrypt() {
    visualcrypt(false);
}

document.getElementById("encryptbtn").addEventListener("click", encrypt);

document.getElementById("decryptbtn").addEventListener("click", decrypt);
