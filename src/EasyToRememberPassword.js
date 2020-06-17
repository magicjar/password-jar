import Generate from "./Generate";

function EasyToRememberPassword(letterFirst, letterLength, digitLength) {
    let result = '';

    if (letterFirst) {
        result += Generate(letterLength, true, false, false, false);
        result += Generate(digitLength, false, false, true, false);
    }
    else {
        result += Generate(digitLength, false, false, true, false);
        result += Generate(letterLength, true, false, false, false);
    }

    return result;
}

export default EasyToRememberPassword