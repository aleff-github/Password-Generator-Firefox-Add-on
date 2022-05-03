/*browser.contextMenus.create({
    id: "password-generator",
    title: "Generate Random Password!",
    contexts: ["all"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    console.log("asd")
    if (info.menuItemId == "password-generator") {
        alert(1);
        //elem = browser.contextMenus.bookmarkId;
        //password = generateRandomStrongPassword();
        //elem.value = password;
        browser.contextMenus.bookmarkId = generateRandomStrongPassword();
    }
})*/

// browser.menus.create({
//     id: "password-generator",
//     title: "Generate Random Password!",
//     contexts: ["all"]
//   }, onCreated);

//   browser.menus.onClicked.addListener((info, tab) => {
//     console.log("asd");
//   });

// browser.menus.create({
//     id: "password-generator",
//     title: "Generate Random Password 2!",
//     contexts: ["all"],
//     onclick(info, tab) {
//         elem = `browser.menus.getTargetElement(${info.targetElementId})`;
//         alert(elem)
//         password = generateRandomStrongPassword();
//         alert(password)
//         elem.textContent = password;
//     },
//   });

// Source: https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
function generateRandomStrongPassword() {
    var generatePassword = (
        length = 16,
        wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-_#$"[]{}.:,;<>£%&/\\|()=?^\''
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => wishlist[x % wishlist.length])
            .join('')

    return generatePassword();
}