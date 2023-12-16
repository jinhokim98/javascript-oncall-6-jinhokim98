import Validator from '../utils/Validator.js';

class WeekdayWorkers {
  #weekdayWorkers;

  constructor(weekdayWorkers) {
    WeekdayWorkers.#validator(weekdayWorkers);
    this.#weekdayWorkers = weekdayWorkers;
  }

  static #validator(weekdayWorkers) {
    Validator.isOverThanNicknameLength(weekdayWorkers);
    Validator.isWorkersLength(weekdayWorkers);
    Validator.isNotDuplicateWorkers(weekdayWorkers);
  }
}

export default WeekdayWorkers;
