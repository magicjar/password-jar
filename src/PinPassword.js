import Generate from "./Generate";

function PINPassword(length) {
    return Generate(length, false, false, true, false)
}

export default PINPassword