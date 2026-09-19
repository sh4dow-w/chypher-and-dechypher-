let alphabet = [];

for(let i=97; i<=122; i++) {
    alphabet.push(String.fromCharCode(i));
}

let alphabetUpper = [];

for(let i=65; i<=90; i++) {
    alphabetUpper.push(String.fromCharCode(i));
}

console.log(alphabet);

function chypher(password, key) {
    let result = '';
    for(let i=0; i<password.length; i++) {
        let char = password[i];

        if(alphabet.includes(char)) {
            let currentIndex = alphabet.indexOf(char);
            if(currentIndex + key < alphabet.length) {
                result += alphabet[currentIndex+key];
            } else {
                result += alphabet[(currentIndex + key) - alphabet.length];
            }
        }

        if(alphabetUpper.includes(char)) {
            let currentIndex = alphabetUpper.indexOf(char);
            if(currentIndex + key < alphabetUpper.length) {
                result += alphabetUpper[currentIndex+key];
            } else {
                result += alphabetUpper[(currentIndex + key) - alphabetUpper.length];
            }
        }
    }
    return result;
}

function dechypher(password, key) {
    let result = '';
    for(let i=0; i<password.length; i++) {
        let char = password[i];

        if(alphabet.includes(char)) {
            let currentIndex = alphabet.indexOf(char);
            if(currentIndex - key >= 0) {
                result += alphabet[currentIndex-key];
            } else {
                result += alphabet[(currentIndex - key) + alphabet.length];
            }
        }

        if(alphabetUpper.includes(char)) {
            let currentIndex = alphabetUpper.indexOf(char);
            if(currentIndex - key >= 0) {
                result += alphabetUpper[currentIndex-key];
            } else {
                result += alphabetUpper[(currentIndex - key) + alphabetUpper.length];
            }
        }
    }
    return result;
}

encrypt.onclick = function() {
    result.value = chypher(pass.value, parseInt(key.value));
}

decrypt.onclick = function() {
    result.value = dechypher(pass.value, parseInt(key.value));
}

clear.onclick = function() {
    pass.value = '';
    result.value = '';
}