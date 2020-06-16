const lowercaseCharSet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersCharSet = '0123456789';
const symbolsCharSet = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

export function Generate(length: number, lowercase?: boolean, uppercase?: boolean, numbers?: boolean, symbols?: boolean): string {    
    let selectionCharSet = '';

    if (lowercase) selectionCharSet += lowercaseCharSet;

    if (uppercase) selectionCharSet += uppercaseCharSet;

    if (numbers) selectionCharSet += numbersCharSet;

    if (symbols) selectionCharSet += symbolsCharSet;

    let randomCharSet = '';

    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * selectionCharSet.length);
        randomCharSet += selectionCharSet.substring(rand, rand + 1);
    }

    return randomCharSet;
}