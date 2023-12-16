import Validator from '../utils/Validator.js';

class HolidayWorkers {
  #holidayWorkers;

  #currentWorkerIndex = 0;

  constructor(holidayWorkers) {
    HolidayWorkers.#validator(holidayWorkers);
    this.#holidayWorkers = holidayWorkers;
  }

  static #validator(holidayWorkers) {
    Validator.isOverThanNicknameLength(holidayWorkers);
    Validator.isWorkersLength(holidayWorkers);
    Validator.isNotDuplicateWorkers(holidayWorkers);
  }

  getNextWorker(yesterdayWorker) {
    if (this.#currentWorkerIndex >= this.#holidayWorkers.length) {
      this.#currentWorkerIndex = 0;
    }

    if (yesterdayWorker === this.#holidayWorkers[this.#currentWorkerIndex]) {
      this.changeWorkerForContinuouslyWork();
    }

    const nextWorker = this.#holidayWorkers[this.#currentWorkerIndex];
    this.#currentWorkerIndex += 1;

    return nextWorker;
  }

  changeWorkerForContinuouslyWork() {
    if (this.#currentWorkerIndex === this.#holidayWorkers.length - 1) {
      this.changeWorkerForHolidayLastWorkers();
      return;
    }

    const newHolidayWorkers = [...this.#holidayWorkers];
    const nextWorker = newHolidayWorkers[this.#currentWorkerIndex + 1];
    const currentWorker = newHolidayWorkers[this.#currentWorkerIndex];

    newHolidayWorkers[this.#currentWorkerIndex] = nextWorker;
    newHolidayWorkers[this.#currentWorkerIndex + 1] = currentWorker;

    this.#holidayWorkers = newHolidayWorkers;
  }

  changeWorkerForHolidayLastWorkers() {
    const newHolidayWorkers = [...this.#holidayWorkers];
    const nextWorker = newHolidayWorkers[0];
    const currentWorker = newHolidayWorkers[this.#currentWorkerIndex];

    newHolidayWorkers[this.#currentWorkerIndex] = nextWorker;
    newHolidayWorkers[0] = currentWorker;

    this.#holidayWorkers = newHolidayWorkers;
  }
}

export default HolidayWorkers;
