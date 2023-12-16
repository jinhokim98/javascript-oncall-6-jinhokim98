const MESSAGE = {
  INPUT_MONTH_AND_DAY: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  INPUT_WEEKDAY_WORKERS: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  INPUT_HOLIDAY_WORKERS: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  printWorkerInfoByDay: (month, day, dayOfWeek, islegalHoilday, worker) =>
    `${month} ${day}일 ${dayOfWeek}${islegalHoilday} ${worker}`,
  LEGAL_HOLIDAY: '(휴일)',
};

Object.freeze(MESSAGE);

export default MESSAGE;
