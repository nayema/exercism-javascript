const Pangram = function (input) {
  this.input = input
}

Pangram.prototype.isPangram = function () {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'

  if (this.input === '') {
    return false
  }

  const lowerCaseInput = this.input.toLowerCase()
  for (let letter of alphabets) {
    if (!lowerCaseInput.includes(letter)) {
      return false
    }
  }

  return true
}

module.exports = Pangram
