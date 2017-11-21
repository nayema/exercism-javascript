const Cipher = require('./simple-cipher')

describe('Random key cipher', function () {
  const cipher = new Cipher()

  xit('has a key made of letters', function () {
    expect(cipher.key).toMatch(/^[a-z]+$/)
  })

  it('can encode', function () {
    expect(cipher.encode('aaaaaaaaaa')).toEqual(cipher.key.substr(0, 10))
  })

  xit('can decode', function () {
    expect(cipher.decode(cipher.key.substr(0, 10))).toEqual('aaaaaaaaaa')
  })

  xit('is reversible', function () {
    const plaintext = 'abcdefghij'
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext)
  })
})

xdescribe('Incorrect key cipher', function () { //PASS
  it('throws an error with an all caps key', function () {
    expect(function () {
      new Cipher('ABCDEF')
    }).toThrow(new Error('Bad key'))
  })

  it('throws an error with a numeric key', function () {
    expect(function () {
      new Cipher('12345')
    }).toThrow(new Error('Bad key'))
  })

  it('throws an error with an empty key', function () {
    expect(function () {
      new Cipher('')
    }).toThrow(new Error('Bad key'))
  })
})

xdescribe('Substitution cipher', function () {
  const key = 'abcdefghij'
  const cipher = new Cipher(key)

  it('keeps the submitted key', function () {
    expect(cipher.key).toEqual(key)
  })

  it('can encode', function () {
    expect(cipher.encode('aaaaaaaaaa')).toEqual('abcdefghij')
  })

  it('can decode', function () {
    expect(cipher.decode('abcdefghij')).toEqual('aaaaaaaaaa')
  })

  it('is reversible', function () {
    expect(cipher.decode(cipher.encode('abcdefghij'))).toEqual('abcdefghij')
  })

  it(': double shift encode', function () {
    expect(new Cipher('iamapandabear').encode('iamapandabear')).
      toEqual('qayaeaagaciai')
  })

  it('can wrap on encode', function () {
    expect(cipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi')
  })

  it('can wrap on decode', () => {
    expect(cipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz')
  })

  it('can handle messages longer than the key', function () {
    expect(new Cipher('abc').encode('iamapandabear')).toEqual('iboaqcnecbfcr')
  })
})
