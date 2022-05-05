
function generateRandomStrongPassword() {

    let size = document.getElementById('size').value;
    if (Number(size) == false) { return "Choose a number of size!"; }

    charapters = "";
    symbols = "~!@-_#$\"[]{}.:,;<>£%&/\\|()=?^\'";
    numbers = "0123456789";
    low = "abcdefghijklmnopqrstuvwxyz";
    upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    symbolsFlag = document.getElementById("symbols").checked;
    numbersFlag = document.getElementById("numbers").checked;
    lowFlag = document.getElementById("low").checked;
    uppFlag = document.getElementById("upp").checked;

    if (symbolsFlag == true) { charapters = charapters.concat(symbols); }

    if (numbersFlag == true) { charapters = charapters.concat(numbers); }

    if (lowFlag == true) { charapters = charapters.concat(low); }

    if (uppFlag == true) { charapters = charapters.concat(upp); }

    if (charapters == "") { return "Select at least 1 option!"; }

    var generatePassword = (
        length = size,
        wishlist = charapters
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => wishlist[x % wishlist.length])
            .join('');

    specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    numbersChars = /[0123456789]/;
    lowChars = /[abcdefghijklmnopqrstuvwxyz]/;
    uppChars = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    retry = true;
    while (retry) {
        password = generatePassword();

        if ((specialChars.test(password) == symbolsFlag) &&
            (numbersChars.test(password) == numbersFlag) &&
            (lowChars.test(password) == lowFlag) &&
            (uppChars.test(password) == uppFlag) ||
            (size < 8)) {
            break;
        }
    }
    return password;
}

function generatePassword() {
    textArea = document.getElementById('password');
    let password = generateRandomStrongPassword();
    textArea.value = password;
}

document.getElementById("generate-password").addEventListener("click", generatePassword);
