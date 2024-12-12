function generateRandomStrongPassword() {

    let size = document.getElementById('slider').value;

    charapters = "";
    const symbols = "~!@-_#$\"[]{}.:,;<>£%&/\\|()=?^\'";
    const numbers = "0123456789";
    const low = "abcdefghijklmnopqrstuvwxyz";
    const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const className = "clicked";

    uppFlag = document.getElementById('upp').classList.contains(className);
    lowFlag = document.getElementById('low').classList.contains(className);
    numbersFlag = document.getElementById('numbers').classList.contains(className);
    symbolsFlag = document.getElementById('symbols').classList.contains(className);

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

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("generate-password").addEventListener("click", generatePassword);

    const btns = [document.getElementById('upp'), document.getElementById('low'), document.getElementById('numbers'), document.getElementById('symbols')];
    const className = "clicked"

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            if(btns[i].classList.contains(className)){ // if exist
                btns[i].classList.remove(className); // remove
            } else {
                btns[i].classList.add(className); // append
            }
        });
    }

    var slider = document.getElementById('slider');
    slider.addEventListener('input', function() {
        document.getElementById("current-size").innerHTML = document.getElementById('slider').value;
    });

});