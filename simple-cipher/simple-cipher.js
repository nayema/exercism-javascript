const Cipher = function (key) {
  this.key = key || 'aaaaaaaaaa'

  const numbers = /^\d+$/
  const UpperCaseAlphabets = /^[A-Z]*$/
  if (UpperCaseAlphabets.test(key) || numbers.test(key) || key === '')
    throw Error('Bad key')
}

Cipher.prototype.encode = function (input) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  let encoded = []
  for (let i = 0; i < input.length; i++) {
    let outputIndex = alphabets.indexOf(this.key[i]) +
      alphabets.indexOf(input[i])
    encoded.push(alphabets[outputIndex])
  }
  return encoded.join('')
}

Cipher.prototype.decode = function (input) {
  return input
}

module.exports = Cipher