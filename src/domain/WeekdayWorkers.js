import Validator from '../utils/Validator.js';

class WeekdayWorkers {
  #weekdayWorkers;

  #currentWorkerIndex = 0;

  constructor(weekdayWorkers) {
    WeekdayWorkers.#validator(weekdayWorkers);
    this.#weekdayWorkers = weekdayWorkers;
  }

  static #validator(weekdayWorkers) {
    Validator.isOverThanNicknameLength(weekdayWorkers);
    Validator.isWorkersLength(weekdayWorkers);
    Validator.isNotDuplicateWorkers(weekdayWorkers);
  }

  getNextWorker() {
    if (this.#currentWorkerIndex > this.#weekdayWorkers.length) {
      this.#currentWorkerIndex = 0;
    }

    const nextWorker = this.#weekdayWorkers[this.#currentWorkerIndex];
    this.#currentWorkerIndex += 1;

    return nextWorker;
  }
}

export default WeekdayWorkers;
