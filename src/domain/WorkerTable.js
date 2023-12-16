import CONDITION from '../constants/Condition.js';
import MESSAGE from '../constants/Message.js';

class WorkerTable {
  #monthAndDay;

  #weekdayWorkers;

  #holidayWorkers;

  #table = [];

  constructor(monthAndDay, weekdayWorkers, holidayWorkers) {
    this.#monthAndDay = monthAndDay;
    this.#weekdayWorkers = weekdayWorkers;
    this.#holidayWorkers = holidayWorkers;
  }

  planWorkerTable() {
    const dayInfo = this.#monthAndDay.getDayOfWeekInfoOneMonth();
    dayInfo.forEach(({ day, isHoliday }, index) => {
      const currentWorker = this.getCurrentWorker(index);
      this.#planWorkerTableByDay(day, isHoliday, currentWorker);
    });
  }

  getCurrentWorker(index) {
    if (index === 0) {
      return '';
    }
    return this.#table[index];
  }

  #planWorkerTableByDay(day, isHoliday, currentWorker) {
    if (!isHoliday) {
      this.#planWorkerTableByWeekday(day, currentWorker);
      return;
    }

    this.#planWorkerTableByHoliday(day, currentWorker);
  }

  #planWorkerTableByWeekday(day, currentWorker) {
    const worker = this.#weekdayWorkers.getNextWorker(currentWorker);
    this.#table.push({ day, worker, isHoliday: false });
  }

  #planWorkerTableByHoliday(day, currentWorker) {
    const worker = this.#holidayWorkers.getNextWorker(currentWorker);
    this.#table.push({ day, worker, isHoliday: true });
  }

  loadWorkerTableResultMessage() {
    return this.#table.map((date, index) => this.#loadWorkerTableResultByDay(date, index));
  }

  #loadWorkerTableResultByDay(date, index) {
    return MESSAGE.printWorkerInfoByDay(
      this.#monthAndDay.getMonthString(),
      index + 1,
      date.day,
      WorkerTable.makeMessageLegalHoliday(date.day, date.isHoliday),
      date.worker,
    );
  }

  static makeMessageLegalHoliday(day, isHoliday) {
    const dayIndex = CONDITION.DAY_OF_WEEK.findIndex((dayOfWeek) => day === dayOfWeek);

    if (dayIndex < 5 && isHoliday) {
      return MESSAGE.LEGAL_HOLIDAY;
    }

    return '';
  }
}

export default WorkerTable;
