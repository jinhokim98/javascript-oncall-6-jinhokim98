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

  getNextWorker(yesterdayWorker) {
    if (this.#currentWorkerIndex >= this.#weekdayWorkers.length) {
      this.#currentWorkerIndex = 0;
    }

    if (yesterdayWorker === this.#weekdayWorkers[this.#currentWorkerIndex]) {
      this.changeWorkerForContinuouslyWork();
    }

    const nextWorker = this.#weekdayWorkers[this.#currentWorkerIndex];
    this.#currentWorkerIndex += 1;

    return nextWorker;
  }

  changeWorkerForContinuouslyWork() {
    if (this.#currentWorkerIndex === this.#weekdayWorkers.length - 1) {
      this.changeWorkerForWeekdayLastWorkers();
      return;
    }

    const newWeekdayWorkers = [...this.#weekdayWorkers];
    const nextWorker = newWeekdayWorkers[this.#currentWorkerIndex + 1];
    const currentWorker = newWeekdayWorkers[this.#currentWorkerIndex];

    newWeekdayWorkers[this.#currentWorkerIndex] = nextWorker;
    newWeekdayWorkers[this.#currentWorkerIndex + 1] = currentWorker;

    this.#weekdayWorkers = newWeekdayWorkers;
  }

  changeWorkerForWeekdayLastWorkers() {
    const newWeekdayWorkers = [...this.#weekdayWorkers];
    const nextWorker = newWeekdayWorkers[0];
    const currentWorker = newWeekdayWorkers[this.#currentWorkerIndex];

    newWeekdayWorkers[this.#currentWorkerIndex] = nextWorker;
    newWeekdayWorkers[0] = currentWorker;

    this.#weekdayWorkers = newWeekdayWorkers;
  }
}

export default WeekdayWorkers;
