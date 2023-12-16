import MESSAGE from '../constants/Message.js';
import CONDITION from '../constants/SystemCondition.js';

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
      const yesterdayWorker = this.getYesterdayWorker(index);
      this.#planWorkerTableByDay(day, isHoliday, yesterdayWorker);
    });
  }

  getYesterdayWorker(index) {
    if (index === 0) {
      return '';
    }

    return this.#table[index - 1].worker;
  }

  #planWorkerTableByDay(day, isHoliday, yesterdayWorker) {
    if (!isHoliday) {
      this.#planWorkerTableByWeekday(day, yesterdayWorker);
      return;
    }

    this.#planWorkerTableByHoliday(day, yesterdayWorker);
  }

  #planWorkerTableByWeekday(day, yesterdayWorker) {
    const worker = this.#weekdayWorkers.getNextWorker(yesterdayWorker);
    this.#table.push({ day, worker, isHoliday: false });
  }

  #planWorkerTableByHoliday(day, yesterdayWorker) {
    const worker = this.#holidayWorkers.getNextWorker(yesterdayWorker);
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

    if (dayIndex < CONDITION.SATURDAY && isHoliday) {
      return MESSAGE.LEGAL_HOLIDAY;
    }

    return '';
  }
}

export default WorkerTable;
