import CONDITION from '../constants/Condition.js';
import Validator from '../utils/Validator.js';

class MonthAndDay {
  #month;

  #dayOfWeek;

  constructor(month, dayOfWeek) {
    MonthAndDay.#monthValidator(month);
    MonthAndDay.#dayValidator(dayOfWeek);

    this.#month = Number(month);
    this.#dayOfWeek = dayOfWeek;
  }

  static #monthValidator(month) {
    Validator.isMonthForm(month);
  }

  static #dayValidator(dayOfWeek) {
    Validator.isDayOfWeekForm(dayOfWeek);
  }

  getEndDay() {
    return CONDITION.MONTH[this.#month];
  }

  getDayOfWeekInfoOneMonth() {
    const endDay = this.getEndDay();
    const startDayIndex = CONDITION.DAY_OF_WEEK.findIndex((dayOfWeek) => dayOfWeek === this.#dayOfWeek);
    const dayArray = [];

    Array.from({ length: endDay }).forEach((_, index) => {
      this.#makeThisDayAndIsHoliday(startDayIndex, index, dayArray);
    });

    return dayArray;
  }

  #makeThisDayAndIsHoliday(startDayIndex, day, dayArray) {
    const dayIndex = (startDayIndex + day) % CONDITION.DAY_OF_WEEK.length;
    dayArray.push({ day: CONDITION.DAY_OF_WEEK[dayIndex], isHoliday: this.isHoliday(dayIndex, day + 1) });
  }

  isHoliday(dayIndex, currentDay) {
    if (dayIndex >= 5) {
      return true;
    }

    if (CONDITION.HOLIDAY.find(({ month, day }) => day === currentDay && month === this.#month) !== undefined) {
      return true;
    }

    return false;
  }
}

export default MonthAndDay;
