class MonthAndDay {
  #month;

  #day;

  constructor(month, day) {
    MonthAndDay.#monthValidator(month);
    MonthAndDay.#dayValidator(day);

    this.#month = month;
    this.#day = day;
  }

  static #monthValidator(month) {}

  static #dayValidator(day) {}
}

export default MonthAndDay;
