
browser.menus.create({
    id: "password-generator",
    title: "Generate Random Password!",
    contexts: ["editable"]
});

browser.menus.onClicked.addListener((info, tab) => {
    if (info.editable) {
        
        payload = `browser.menus.getTargetElement(${info.targetElementId}).value = `
        payload += "\"" + generateRandomStrongPassword() + "\";"
        
        browser.tabs.executeScript(tab.id, {
            frameId: info.frameId,
            code: payload
        });
    }
});

// Source: https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
function generateRandomStrongPassword() {

    var generatePassword = (
        length = 16,
        wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-_#$"[]{}.:,;<>£%&/\\|()=?^\''
    ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => wishlist[x % wishlist.length])
            .join('');
    
    return generatePassword();
}