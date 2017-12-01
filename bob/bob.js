const Bob = function () {}

Bob.prototype.hey = function (input) {
  if ((input.charAt(input.length - 1) === '!' && !input.includes('Let\'s')) ||
    ((input === input.toUpperCase()) && (input !== input.toLowerCase())) ||
    ((input === input.toUpperCase()) && input.includes('?'))) {
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
