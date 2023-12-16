import OnCallSystem from './controller/OnCallSystem.js';

class App {
  async run() {
    await OnCallSystem.prototype.init();
    return this;
  }
}

export default App;
