const alphabets = 'abcdefghijklmnopqrstuvwxyz'

const Cipher = function (key) {
  this.key = key || 'aaaaaaaaaa'

  const numbers = /^\d+$/
  const UpperCaseAlphabets = /^[A-Z]*$/
  if (UpperCaseAlphabets.test(key) || numbers.test(key) || key === '') {
    throw Error('Bad key')
  }
}

Cipher.prototype.encode = function (input) {
  let encoded = []

  for (let i = 0; i < input.length; i++) {
    let keyRemainder = i % this.key.length

    let outputIndex = alphabets.indexOf(input[i]) +
      alphabets.indexOf(this.key[keyRemainder])
    if (outputIndex >= alphabets.length) {
      outputIndex -= alphabets.length
    }
    encoded.push(alphabets[outputIndex])
  }
  return encoded.join('')
}

Cipher.prototype.decode = function (input) {
  let encoded = []

  for (let i = 0; i < input.length; i++) {
    let keyRemainder = i % this.key.length
    let outputIndex = alphabets.indexOf(input[i]) -
      alphabets.indexOf(this.key[keyRemainder])
    if (outputIndex < 0) {
      outputIndex += alphabets.length
    }
    encoded.push(alphabets[outputIndex])
  }
  return encoded.join('')
}

module.exports = Cipher
