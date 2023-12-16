import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import OutputView from '../view/OutputView.js';
import CONDITION from '../constants/Condition.js';

class SystemUtils {
  static seperateInputByCommaMonthAndDay(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }

    if (input.split(',').length > CONDITION.MONTH_AND_DAY.MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.OVER_INPUT);
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
