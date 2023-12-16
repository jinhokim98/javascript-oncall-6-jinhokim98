import MonthAndDay from '../domain/MonthAndDay.js';
import SystemUtils from '../utils/SystemUtils.js';
import InputView from '../view/InputView.js';

class OnCallSystem {
  async init() {
    this.start();
    const monthAndDay = await SystemUtils.repeatUntilValidInput(OnCallSystem.inputMonthAndDay);
    await SystemUtils.repeatUntilValidInput(OnCallSystem.inputWorkers);
  }

  start() {
    return this;
  }

  static async inputMonthAndDay() {
    const input = await InputView.readMonthAndDay();
    const seperatedInput = SystemUtils.seperateInputByCommaMonthAndDay(input);
    const monthAndDay = new MonthAndDay(seperatedInput[0], seperatedInput[1]);

    return monthAndDay;
  }

  static async inputWorkers() {
    const weekdayWorkerInput = await InputView.readWeekdayWorkers();
    const seperatedWeekdayWorkers = SystemUtils.seperateInputByCommaWorkers(weekdayWorkerInput);
  }
}

export default OnCallSystem;
