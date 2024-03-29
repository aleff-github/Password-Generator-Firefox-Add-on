
// Source: https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
function generateRandomStrongPassword() {

    var generatePassword = (
        length = 16,
        wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-_#$"[]{}.:,;<>£%&/\\|()=?^\''
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => wishlist[x % wishlist.length])
            .join('');

    specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    numbersChars = /[0123456789]/;
    lowChars = /[abcdefghijklmnopqrstuvwxyz]/;
    uppChars = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    while (true) {
        password = generatePassword();

        if (specialChars.test(password) &&
            numbersChars.test(password) &&
            lowChars.test(password) &&
            uppChars.test(password)) {
            break;
        }
    }
    return password;
}