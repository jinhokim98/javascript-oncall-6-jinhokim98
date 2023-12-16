import Validator from '../utils/Validator.js';

class MonthAndDay {
  #month;

  #dayOfWeek;

  constructor(month, dayOfWeek) {
    MonthAndDay.#monthValidator(month);
    MonthAndDay.#dayValidator(dayOfWeek);

    this.#month = month;
    this.#dayOfWeek = dayOfWeek;
  }

  static #monthValidator(month) {
    Validator.isMonthForm(month);
  }

  static #dayValidator(dayOfWeek) {
    Validator.isDayOfWeekForm(dayOfWeek);
  }
}

export default MonthAndDay;
