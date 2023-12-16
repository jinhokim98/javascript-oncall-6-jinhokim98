import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printError(error) {
    Console.print(error.message);
  }

  static printWorkerInfoByDate(byDateMessage) {
    Console.print(byDateMessage);
  }
}

export default OutputView;
