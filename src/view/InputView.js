import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

class InputView {
  static async readWeekdayWorkers() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_MONTH_AND_DAY);
    return input;
  }
}

export default InputView;
