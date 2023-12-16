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
    dayInfo.forEach(({ _, isHoliday }, index) => {
      const currentWorker = this.getCurrentWorker(index);
      this.#planWorkerTableByDay(isHoliday, currentWorker);
    });
  }

  getCurrentWorker(index) {
    if (index === 0) {
      return '';
    }
    return this.#table[index];
  }

  #planWorkerTableByDay(isHoliday, currentWorker) {
    if (!isHoliday) {
      this.#planWorkerTableByWeekday(currentWorker);
      return;
    }

    this.#planWorkerTableByHoliday(currentWorker);
  }

  #planWorkerTableByWeekday(currentWorker) {
    const worker = this.#weekdayWorkers.getNextWorker(currentWorker);
    this.#table.push(worker);
  }

  #planWorkerTableByHoliday(currentWorker) {
    const worker = this.#holidayWorkers.getNextWorker(currentWorker);
    this.#table.push(worker);
  }
}

export default WorkerTable;
