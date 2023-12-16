import InputView from '../view/InputView.js';

class OnCallSystem {
  async init() {
    this.start();
    await OnCallSystem.inputMonthAndDay();
  }

  start() {
    return this;
  }

  static async inputMonthAndDay() {
    const input = await InputView.readWeekdayWorkers();
    return input;
  }
}

export default OnCallSystem;
