function gid(id) {
    return document.getElementById(id);
}

var inputbox = gid("input");

var outputbox = gid("output");

var keybox = gid("key");

var encryptbtn = gid("encryptbtn");

var decryptbtn = gid("decryptbtn");

var input, key;

function updatevars() {
    // strip spaces
    input = inputbox.value.replace(/ /g, "");
    key = keybox.value.replace(/ /g, "");
}

function visualcrypt(mode) {
    updatevars();
    var beginTime = (new Date()).getTime();
    outputbox.innerHTML = crypt(mode, input, key);
    var endTime = (new Date()).getTime();
    console.log("Ciphering operation took " + (endTime - beginTime) + " millisecond(s)");
}

function encrypt() {
    visualcrypt(true);
}

function decrypt() {
    visualcrypt(false);
}

encryptbtn.addEventListener("click", encrypt);

decryptbtn.addEventListener("click", decrypt);
