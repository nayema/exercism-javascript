const Cipher = require('./simple-cipher')

describe('Random key cipher', function () {
  it('has a key made of letters', function () {
    const cipher = new Cipher()
    const letters = /^[a-z]+$/

    const key = cipher.key

    expect(key).toMatch(letters)
  })

  it('can encode', function () {
    const cipher = new Cipher()
    const input = 'aaaaaaaaaa'

    const result = cipher.encode(input)

    expect(result).toEqual(cipher.key.substr(0, 10))
  })

  it('can decode', function () {
    const cipher = new Cipher()
    const input = cipher.key.substr(0, 10)

    const result = cipher.decode(input)

    expect(result).toEqual('aaaaaaaaaa')
  })

  it('is reversible', function () {
    const cipher = new Cipher()
    const input = 'abcdefghij'

    const result = cipher.decode(cipher.encode(input))

    expect(result).toEqual(input)
  })
})

describe('Incorrect key cipher', function () {
  it('throws an error with an all caps key', function () {
    const key = 'ABCDEF'

    expect(function () {
      new Cipher(key)
    }).toThrow(new Error('Bad key'))
  })

  it('throws an error with a numeric key', function () {
    const key = '12345'

    expect(function () {
      new Cipher(key)
    }).toThrow(new Error('Bad key'))
  })

  it('throws an error with an empty key', function () {
    const key = ''

    expect(function () {
      new Cipher(key)
    }).toThrow(new Error('Bad key'))
  })
})

describe('Substitution cipher', function () {
  it('keeps the submitted key', function () {
    const key = 'abcdefghij'

    const cipher = new Cipher(key)

    expect(cipher.key).toEqual(key)
  })

  it('can encode', function () {
    const key = 'abcdefghij'
    const cipher = new Cipher(key)

    const input = 'aaaaaaaaaa'
    const result = cipher.encode(input)

    expect(result).toEqual('abcdefghij')
  })

  it('can decode', function () {
    const key = 'abcdefghij'
    const cipher = new Cipher(key)

    const input = 'abcdefghij'
    const result = cipher.decode(input)

    expect(result).toEqual('aaaaaaaaaa')
  })

  it('is reversible', function () {
    const key = 'abcdefghij'
    const cipher = new Cipher(key)

    const input = 'abcdefghij'
    const result = cipher.decode(cipher.encode(input))

    expect(result).toEqual('abcdefghij')
  })

  it(': double shift encode', function () {
    const key = 'iamapandabear'
    const cipher = new Cipher(key)

    const input = 'iamapandabear'
    const result = cipher.encode(input)

    expect(result).toEqual('qayaeaagaciai')
  })

  it('can wrap on encode', function () {
    const key = 'abcdefghij'
    const cipher = new Cipher(key)

    const input = 'zzzzzzzzzz'
    const result = cipher.encode(input)

    expect(result).toEqual('zabcdefghi')
  })

  it('can wrap on decode', function () {
    const key = 'abcdefghij'
    const cipher = new Cipher(key)

    const input = 'zabcdefghi'
    const result = cipher.decode(input)

    expect(result).toEqual('zzzzzzzzzz')
  })

  it('can handle messages longer than the key', function () {
    const key = 'abc'
    const cipher = new Cipher(key)

    const input = 'iamapandabear'
    const result = cipher.encode(input)

    expect(result).toEqual('iboaqcnecbfcr')
  })
})
