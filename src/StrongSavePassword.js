import Generate from "./Generate";

function StrongSavePassword(length, lowercase = true, uppercase = true, numbers = true, symbols = true) {
    const result = Generate(length, lowercase, uppercase, numbers, symbols);

    if (lowercase) {
        if (!/[a-z]/.test(result)) {
            console.warn("Result does not contain(s) lowercase letter: " + result + ". Regenerate.");
            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    if (uppercase) {
        if (!/[A-Z]/.test(result)) {
            console.warn("Result does not contain(s) UPPERCASE letter: " + result + ". Regenerate.");
            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    if (numbers) {
        if (!/[0-9]/.test(result)) {
            console.warn("Result does not contain(s) number(s): " + result + ". Regenerate.");
            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    if (symbols) {
        if (!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(result)) {
            console.warn("Result does not contain(s) symbol(s): " + result + ". Regenerate.");
            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    return result;
}

export default StrongSavePassword