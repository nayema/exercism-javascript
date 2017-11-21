const Year = function (year) {
  this.year = year
}

Year.prototype.isLeap = function () {
  const divisibleBy4 = this.year % 4 === 0
  const notDivisibleBy100 = this.year % 100 !== 0
  const divisibleBy400 = this.year % 400 === 0

  return ((divisibleBy4 && notDivisibleBy100) || divisibleBy400)
}

module.exports = Year
