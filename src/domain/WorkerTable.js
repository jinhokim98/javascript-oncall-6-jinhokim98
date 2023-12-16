class WorkerTable {
  #monthAndDay;

  #weekdayWorkers;

  #holidayWorkers;

  constructor(monthAndDay, weekdayWorkers, holidayWorkers) {
    this.#monthAndDay = monthAndDay;
    this.#weekdayWorkers = weekdayWorkers;
    this.#holidayWorkers = holidayWorkers;
  }

  planWorkerTable() {
    const endDay = this.#monthAndDay.getEndDay();
    Array.from({ length: endDay }).forEach(() => {
      this.#planWorkerTableByDay();
    });
  }

  #planWorkerTableByDay() {}
}

export default WorkerTable;
