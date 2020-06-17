(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.PasswordJar = {}));
}(this, (function (exports) { 'use strict';

    var lowercaseCharSet = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersCharSet = '0123456789';
    var symbolsCharSet = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

    function Generate(length) {
      var lowercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var uppercase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var numbers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var symbols = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var selectionCharSet = '';
      if (lowercase) selectionCharSet += lowercaseCharSet;
      if (uppercase) selectionCharSet += uppercaseCharSet;
      if (numbers) selectionCharSet += numbersCharSet;
      if (symbols) selectionCharSet += symbolsCharSet;
      var randomCharSet = '';

      for (var i = 0; i < length; i++) {
        var rand = Math.floor(Math.random() * selectionCharSet.length);
        randomCharSet += selectionCharSet.substring(rand, rand + 1);
      }

      return randomCharSet;
    }

    function PINPassword(length) {
      var result = Generate(length, false, false, true, false);
      return result;
    }

    function EasyToRememberPassword(letterFirst, letterLength, digitLength) {
      var result = '';

      if (letterFirst) {
        result += Generate(letterLength, true, false, false, false);
        result += Generate(digitLength, false, false, true, false);
      } else {
        result += Generate(digitLength, false, false, true, false);
        result += Generate(letterLength, true, false, false, false);
      }

      return result;
    }

    function StrongSavePassword(length) {
      var lowercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var uppercase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var numbers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var symbols = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var result = Generate(length, lowercase, uppercase, numbers, symbols);

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

    exports.EasyToRememberPassword = EasyToRememberPassword;
    exports.PINPassword = PINPassword;
    exports.StrongSavePassword = StrongSavePassword;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=password-jar.js.map
