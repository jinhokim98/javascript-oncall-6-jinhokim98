class WeekdayWorkers {
  #weekdayWorkers;

  constructor(weekdayWorkers) {
    WeekdayWorkers.#validator(weekdayWorkers);
    this.#weekdayWorkers = weekdayWorkers;
  }

  static #validator(weekdayWorkers) {}
}

export default WeekdayWorkers;
