const alphabets = /^[a-z]*$/
const numbers = /^\d+$/

const Cipher = function (key) {
  this.key = key || 'aaaaaaaaaa'
  if (key && key.toUpperCase() || numbers.test(key) || key === '')
    throw Error('Bad key')
}

Cipher.prototype.encode = function (input) {
  return input
}

Cipher.prototype.decode = function (input) {
  return input
}

module.exports = Cipher

