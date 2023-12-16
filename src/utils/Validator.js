import CONDITION from '../constants/Condition.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import SystemUtils from './SystemUtils.js';

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

  static isOverThanNicknameLength(nicknames) {
    if (nicknames.find((nickname) => nickname.length > CONDITION.WORKER.NICKNAME_MAX_LENGTH) !== undefined) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  static isWorkersLength(workers) {
    if (workers.length < CONDITION.WORKER.MIN || workers.length > CONDITION.WORKER.MAX) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  static isNotDuplicateWorkers(workers) {
    if (workers.find((worker) => SystemUtils.isDuplicateInList(workers, worker)) !== undefined) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }
}

export default Validator;
