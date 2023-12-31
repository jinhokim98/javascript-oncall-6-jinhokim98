const CONDITION = {
  MONTH: {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  },
  MONTH_FORM: {
    START: 1,
    END: 12,
  },
  SATURDAY: 5,
  DAY_OF_WEEK: ['월', '화', '수', '목', '금', '토', '일'],
  HOLIDAY: [
    { month: 1, day: 1 },
    { month: 3, day: 1 },
    { month: 5, day: 5 },
    { month: 6, day: 6 },
    { month: 8, day: 15 },
    { month: 10, day: 3 },
    { month: 10, day: 9 },
    { month: 12, day: 25 },
  ],
  MONTH_AND_DAY: {
    MAX_LENGTH: 2,
  },
  WORKER: {
    NICKNAME_MAX_LENGTH: 5,
    MIN: 5,
    MAX: 35,
  },
};

Object.freeze(CONDITION);

export default CONDITION;
