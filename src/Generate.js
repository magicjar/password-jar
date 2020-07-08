const lowercaseCharSet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersCharSet = '0123456789';
const symbolsCharSet = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

function Generate(length, lowercase = true, uppercase = true, numbers = true, symbols = true) {
    let selectionCharSet = '';

    if (lowercase) selectionCharSet += lowercaseCharSet;
    if (uppercase) selectionCharSet += uppercaseCharSet;
    if (numbers) selectionCharSet += numbersCharSet;
    if (symbols) selectionCharSet += symbolsCharSet;

    let randomCharSet = '';
    let lastRand = -1

    if (!selectionCharSet) return randomCharSet

    while (randomCharSet.length < length) {
        let rand = Math.floor(Math.random() * selectionCharSet.length);
        
        if (rand != lastRand) {
            randomCharSet += selectionCharSet.substring(rand, rand + 1);
            lastRand = rand
        }
    }

    return randomCharSet;
}

export default Generate