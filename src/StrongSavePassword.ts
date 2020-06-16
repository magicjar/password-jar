import { Generate as generate } from "./Generate";

let totalRegenerate = 0;

export function StrongSavePassword(length: number, lowercase?: boolean, uppercase?: boolean, numbers?: boolean, symbols?: boolean): string {
    const result = generate(length, lowercase, uppercase, numbers, symbols);

    if (totalRegenerate > 4) { // Throw error when 5 times failed to generate an exact password
        throw "Error generating Password. Try Again";
    }

    if (lowercase) {
        if (!/[a-z]/.test(result)) {
            console.warn("Result does not contain(s) lowercase letter: " + result + ". Regenerate.");

            totalRegenerate++;

            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    if (uppercase) {
        if (!/[A-Z]/.test(result)) {
            console.warn("Result does not contain(s) UPPERCASE letter: " + result + ". Regenerate.");

            totalRegenerate++;

            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    if (numbers) {
        if (!/[0-9]/.test(result)) {
            console.warn("Result does not contain(s) number(s): " + result + ". Regenerate.");

            totalRegenerate++;

            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    if (symbols) {
        if (!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(result)) {
            console.warn("Result does not contain(s) symbol(s): " + result + ". Regenerate.");

            totalRegenerate++;

            return StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
        }
    }

    console.log("Strong and Save Password " + result);

    totalRegenerate = 0;

    return result;
}

StrongSavePassword(8, true, true, true, true);