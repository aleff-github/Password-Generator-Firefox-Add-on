
function generateRandomStrongPassword() {

    let size = document.getElementById('size').value;
    if(Number(size) == false) { return "Choose a number of size!"; }

    charapters = "";
    symbols = "~!@-_#$\"[]{}.:,;<>£%&/\\|()=?^\'";
    numbers = "0123456789";
    low = "abcdefghijklmnopqrstuvwxyz";
    upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("symbols").checked == true) { charapters = charapters.concat(symbols); }

    if(document.getElementById("numbers").checked == true) { charapters = charapters.concat(numbers); }

    if(document.getElementById("low").checked == true) { charapters = charapters.concat(low); }
    
    if(document.getElementById("upp").checked == true) { charapters = charapters.concat(upp); }

    if(charapters == "") { return "Select at least 1 option!"; }
    
    var generatePassword = (
        length = size,
        wishlist = charapters
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => wishlist[x % wishlist.length])
            .join('')

    return generatePassword();
}

function generatePassword() {
    textArea = document.getElementById('password');
    let password = generateRandomStrongPassword();
    textArea.value = password;
}

document.getElementById("generate-password").addEventListener("click", generatePassword);
