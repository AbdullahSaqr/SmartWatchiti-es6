class Timer {
  constructor() {
    this._startTime = null;
    this._endTime = null;
    this._running = false;
    this._duration = 0;
  }

  _calculateDuration() {
    this._duration = this._endTime - this._startTime;
  }

  start() {
    if (this._running) {
      console.log("Timer already started");
      return;
    }

    this._startTime = new Date();
    this._running = true;
    console.log("Timer started");
  }

  stop() {
    if (!this._running) {
      console.log("Timer hasn't started yet");
      return;
    }

    this._endTime = new Date();
    this._running = false;
    this._calculateDuration();
    console.log("Timer stopped");
  }

  reset() {
    this._startTime = null;
    this._endTime = null;
    this._running = false;
    this._duration = 0;
    console.log("Timer reset");
  }

  get duration() {
    return this._duration;
  }
}

class Stopwatch extends Timer {
  updateDurationDisplay() {
    const durationSpan = document.getElementById('durationSpan');
    durationSpan.textContent = `${this.duration} milliseconds`;
  }
}

const stopwatch = new Stopwatch();

document.getElementById('startButton').addEventListener('click', () => {
  stopwatch.start();
});

document.getElementById('stopButton').addEventListener('click', () => {
  stopwatch.stop();
  stopwatch.updateDurationDisplay();
});

document.getElementById('resetButton').addEventListener('click', () => {
  stopwatch.reset();
  stopwatch.updateDurationDisplay();
});