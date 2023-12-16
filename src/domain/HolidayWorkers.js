import Validator from '../utils/Validator.js';

class HolidayWorkers {
  #holidayWorkers;

  constructor(holidayWorkers) {
    HolidayWorkers.#validator(holidayWorkers);
    this.#holidayWorkers = holidayWorkers;
  }

  static #validator(holidayWorkers) {
    Validator.isOverThanNicknameLength(holidayWorkers);
    Validator.isWorkersLength(holidayWorkers);
    Validator.isNotDuplicateWorkers(holidayWorkers);
  }
}

export default HolidayWorkers;
