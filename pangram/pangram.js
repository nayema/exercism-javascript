const Pangram = function (string) {
  this.string = string
}

Pangram.prototype.isPangram = function () {
  return this.string !== ''
}

module.exports = Pangram