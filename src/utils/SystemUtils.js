import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import CONDITION from '../constants/SystemCondition.js';
import OutputView from '../view/OutputView.js';

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

  static seperateInputByCommaWorkers(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
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

  static isDuplicateInList(list, element) {
    return list.indexOf(element) !== list.lastIndexOf(element);
  }
}

export default SystemUtils;
