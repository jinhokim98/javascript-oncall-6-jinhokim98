import MonthAndDay from '../domain/MonthAndDay.js';
import SystemUtils from '../utils/SystemUtils.js';
import InputView from '../view/InputView.js';
import WeekdayWorkers from '../domain/WeekdayWorkers.js';
import HolidayWorkers from '../domain/HolidayWorkers.js';
import WorkerTable from '../domain/WorkerTable.js';
import OutputView from '../view/OutputView.js';

class OnCallSystem {
  async init() {
    this.start();
    const monthAndDay = await SystemUtils.repeatUntilValidInput(OnCallSystem.inputMonthAndDay);
    const { weekdayWorkers, holidayWorkers } = await SystemUtils.repeatUntilValidInput(OnCallSystem.inputWorkers);

    const workerTable = new WorkerTable(monthAndDay, weekdayWorkers, holidayWorkers);
    workerTable.planWorkerTable();
    OnCallSystem.printWorkerTableInfo(workerTable.loadWorkerTableResultMessage());
    this.end();
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
    const weekdayWorkers = new WeekdayWorkers(seperatedWeekdayWorkers);

    const holidayWorkerInput = await InputView.readHolidayWorkers();
    const seperatedHolidayWorkers = SystemUtils.seperateInputByCommaWorkers(holidayWorkerInput);
    const holidayWorkers = new HolidayWorkers(seperatedHolidayWorkers);

    return { weekdayWorkers, holidayWorkers };
  }

  static printWorkerTableInfo(workersInfo) {
    OutputView.printNewLine();

    workersInfo.forEach((workerInfo) => {
      OutputView.printWorkerInfoByDate(workerInfo);
    });
  }

  end() {
    return this;
  }
}

export default OnCallSystem;
