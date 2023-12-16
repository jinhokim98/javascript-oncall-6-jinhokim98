import CONDITION from '../constants/Condition.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';

class Validator {
  static isNotEmpty(input) {
    if (!input.length) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static isMonthForm(month) {
    if (month < CONDITION.MONTH_FORM.START || month > CONDITION.MONTH_FORM.END) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_MONTH);
    }
  }

  static isDayOfWeekForm(dayOfWeek) {
    if (!CONDITION.DAY_OF_WEEK.includes(dayOfWeek)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_DAY_OF_WEEK);
    }
  }
}

export default Validator;