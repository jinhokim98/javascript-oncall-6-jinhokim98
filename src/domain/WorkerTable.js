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
      this.#planWorkerTableByDay(day, isHoliday, index);
    });
  }

  #planWorkerTableByDay(isHoliday, index) {
    if (!isHoliday) {
      this.#planWorkerTableByWeekday();
      return;
    }

    this.#planWorkerTableByHoliday();
  }

  #planWorkerTableByWeekday() {
    const worker = this.#weekdayWorkers.getNextWorker();
    this.#table.push(worker);
  }

  #planWorkerTableByHoliday() {}
}

export default WorkerTable;
