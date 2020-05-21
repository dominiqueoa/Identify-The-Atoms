/* util.js
 *
 * This file defines some useful, all-purpose utility functions. */

export class Util {

  // random integer in closed interval [a, b]
  static random_int(a, b) {
    return a + Math.floor(Math.random() * (b - a + 1));
  }

  // uniformly sample n distinct elements from given array
  // using the Fisher-Yates shuffling algorithm
  static sample(array, n) {
    var sample = array.slice();
    for (var i = 0; i < Math.min(n, sample.length); i++) {
      var rand = this.random_int(i, sample.length - 1);
      var tmp  = sample[i];
      sample[i]    = sample[rand];
      sample[rand] = tmp;
    }
    return sample.slice(0, n);
  }
}

export class Timer {

  constructor(props) {
    this.props = props;
    this.makeCounter = function* makeCounter() {
      let count = 0;
      while(true) {
        count++;
        yield count;
      }
      return count;
    }
    this.counter = this.makeCounter();
    this.ticker = window.setInterval(() => {
      return this.props.tick(this.counter.next().value);
    }, this.props.increment);
    this.timer = window.setTimeout(() => {
      window.clearInterval(this.ticker);
      return this.props.callback();
    }, this.props.limit);
  }

  reset() {
    this.suspend();
    this.counter = this.makeCounter();
    this.ticker = window.setInterval(() => {
      return this.props.tick(this.counter.next().value);
    }, this.props.increment);
    this.timer = window.setTimeout(() => {
      window.clearInterval(this.ticker);
      return this.props.callback();
    }, this.props.limit);
  }

  suspend() {
    window.clearTimeout(this.timer);
    window.clearInterval(this.ticker);
  }
}

