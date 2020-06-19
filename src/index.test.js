import { StrongSavePassword, EasyToRememberPassword, PINPassword } from './index';

describe('Strong and Save Password', () => {
    it('does not contains lowercase', () => {
        expect(!/[a-z]/.test(StrongSavePassword(10, false, true, true, true))).toBe(true);
    })

    it('does not contains uppercase', () => {
        expect(!/[A-Z]/.test(StrongSavePassword(10, true, false, true, true))).toBe(true);
    })

    it('does not contains numbers', () => {
        expect(!/[0-9]/.test(StrongSavePassword(10, true, true, false, true))).toBe(true);
    })

    it('does not contains symbols', () => {
        expect(!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(StrongSavePassword(10, true, true, true, false))).toBe(true);
    })

    it('should has 12 total characters', () => {
        expect(StrongSavePassword(12, true, true, true, false)).toHaveLength(12);
    })
})

describe('Easy to Remember Password', () => {
    let result = EasyToRememberPassword(true, 6, 4);
    let match = result.match(/([a-z]+)([0-9]+)/);

    it('should not contains uppercase', () => {
        expect(!/[A-Z]/.test(result)).toBe(true);
    })

    it ('should not contains symbols', () => {
        expect(!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(result)).toBe(true);
    })

    it('should has 10 total characters', () => {
        expect(result).toHaveLength(10);
    })

    it('should has 6 letters', () => {
        expect(match[1]).toHaveLength(6);
    })

    it('should has 4 numbers', () => {
        expect(match[2]).toHaveLength(4);
    })

    it('should start with a lowercase. eg: qwerty1234', () => {
        expect(match[1]).toMatch(/[a-z]+/);
    })

    it('should end with a numbers. eg: qwerty1234', () => {
        expect(match[2]).toMatch(/[0-9]+/);
    })
})

describe('PIN Password', () => {
    let result = PINPassword(6);

    it('should only contains numbers', () => {
        expect(result).toMatch(/[0-9]+/);
    })

    it('should has 6 numbers', () => {
        expect(result).toHaveLength(6);
    })
})