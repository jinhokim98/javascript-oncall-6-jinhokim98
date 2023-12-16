import ERROR_MESSAGE from '../constants/ErrorMessage.js';

class SystemUtils {
  static seperateInputByComma(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMTPY_INPUT);
    }

    return input.split(',');
  }
}

export default SystemUtils;
