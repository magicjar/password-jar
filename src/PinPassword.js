import Generate from "./Generate";

function PINPassword(length) {
    const result = Generate(length, false, false, true, false);

    return result;
}

export default PINPassword