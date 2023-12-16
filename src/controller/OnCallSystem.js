import MonthAndDay from '../domain/MonthAndDay.js';
import SystemUtils from '../utils/SystemUtils.js';
import InputView from '../view/InputView.js';

class OnCallSystem {
  async init() {
    this.start();
    await SystemUtils.repeatUntilValidInput(OnCallSystem.inputMonthAndDay);
  }

  start() {
    return this;
  }

  static async inputMonthAndDay() {
    const input = await InputView.readWeekdayWorkers();
    const seperatedInput = SystemUtils.seperateInputByCommaMonthAndDay(input);
    const monthAndDay = new MonthAndDay(seperatedInput[0], seperatedInput[1]);

    return monthAndDay;
  }
}

export default OnCallSystem;
