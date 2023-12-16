import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import OutputView from '../view/OutputView.js';

class SystemUtils {
  static seperateInputByComma(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMTPY_INPUT);
    }

    return input.split(',');
  }

  static async #tryInput(func, ...args) {
    try {
      const input = await func(...args);
      return input;
    } catch (error) {
      OutputView.printError(error);
      return undefined;
    }
  }

  static async repeatUntilValidInput(func, ...args) {
    for (;;) {
      const input = await SystemUtils.#tryInput(func, ...args);
      if (input !== undefined) return input;
    }
  }
}

export default SystemUtils;
