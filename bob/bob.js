const Bob = function () {}

Bob.prototype.hey = function (input) {
  if (input.charAt(input.length - 1) === '!' && !input.includes('Let\'s')) {
    return 'Whoa, chill out!'
  } else if ((input === input.toUpperCase()) &&
    (input !== input.toLowerCase())) {
    return 'Whoa, chill out!'
  } else if ((input === input.toUpperCase()) && input.includes('?')) {
    return 'Whoa, chill out!'
  } else if (!input.match(/\S/)) {
    return 'Fine. Be that way!'
  } else if ((input.charAt(input.length - 1) === '?') ||
    input.includes('?  ')) {
    return 'Sure.'
  } else {
    return 'Whatever.'
  }
}

module.exports = Bob