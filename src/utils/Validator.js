import ERROR_MESSAGE from '../constants/ErrorMessage.js';

class Validator {
  static isNotEmpty(input) {
    if (!input.length) {
      throw new Error(ERROR_MESSAGE.EMTPY_INPUT);
    }
  }
}

export default Validator;
