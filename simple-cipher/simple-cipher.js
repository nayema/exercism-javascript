const alphabets = /^[a-z]*$/
const numbers = /^\d+$/

const Cipher = function (key) {
  this.key = key
  if (key && key.toUpperCase() || numbers.test(key) || key === '')
    throw Error('Bad key')
}

Cipher.prototype.encode = function (input) {

}

Cipher.prototype.decode = function (input) {
}

module.exports = Cipher

