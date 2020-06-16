import { Generate as generate } from "./Generate";

export function PINPassword(length: number): string {
    const result = generate(length, false, false, true);

    console.log("PIN Password " + result);

    return result;
}