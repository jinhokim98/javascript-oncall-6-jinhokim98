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

  getNextWorker(currentWorker) {
    if (this.#currentWorkerIndex >= this.#weekdayWorkers.length) {
      this.#currentWorkerIndex = 0;
    }

    if (currentWorker === this.#weekdayWorkers[this.#currentWorkerIndex]) {
      this.changeWorkerForContinuouslyWork();
    }

    const nextWorker = this.#weekdayWorkers[this.#currentWorkerIndex];
    this.#currentWorkerIndex += 1;

    return nextWorker;
  }

  changeWorkerForContinuouslyWork() {
    const newWeekdayWorkers = [...this.#weekdayWorkers];
    const nextWorker = newWeekdayWorkers[this.#currentWorkerIndex + 1];
    const currentWorker = newWeekdayWorkers[this.#currentWorkerIndex];

    newWeekdayWorkers[this.#currentWorkerIndex] = nextWorker;
    newWeekdayWorkers[this.#currentWorkerIndex + 1] = currentWorker;

    this.#weekdayWorkers = newWeekdayWorkers;
  }
}

export default WeekdayWorkers;
