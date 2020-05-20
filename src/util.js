/* util.js
 *
 * This file defines some useful, all-purpose utility functions. */

class Util {

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

export {Util as default};
