import { Generate as generate } from "./Generate";

export function EasyToRememberPassword(letterFirst: boolean, letterLength: number, digitLength: number): string {
    let result = '';

    if (letterFirst) {
        result += generate(letterLength, true);
        result += generate(digitLength, false, false, true);
    }
    else {
        result += result += generate(digitLength, false, false, true);
        result += generate(letterLength, true);
    }

    console.log("Easy to Remember Password " + result);

    return result;
}

EasyToRememberPassword(true, 4, 2);