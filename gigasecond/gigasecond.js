const Gigasecond = function (inputDate) {
  this.inputDate = inputDate
  this.date()
}

Gigasecond.prototype.date = function () {
  let inputUTC = new Date(this.inputDate.getTime() + 10E8 * 1000)
  return inputUTC
}

module.exports = Gigasecond
