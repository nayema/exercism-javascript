const Bob = require('./bob.js')

describe('Bob', function () {
  it('states something', function () {
    const bob = new Bob()

    const result = bob.hey('Something')

    expect(result).toEqual('Whatever.')
  })

  it('shouts', function () {
    const bob = new Bob()

    const result = bob.hey('WATCH OUT!')

    expect(result).toEqual('Whoa, chill out!')
  })

  it('shouts gibberish', function () {
    const bob = new Bob()

    const result = bob.hey('FCECDFCAAB')

    expect(result).toEqual('Whoa, chill out!')
  })

  it('asks a question', function () {
    const bob = new Bob()

    const result = bob.hey('Does this cryogenic chamber make me look fat?')

    expect(result).toEqual('Sure.')
  })

  it('asks a numeric question', function () {
    const bob = new Bob()

    const result = bob.hey('You are, what, like 15?')

    expect(result).toEqual('Sure.')
  })

  it('asks gibberish', function () {
    const bob = new Bob()

    const result = bob.hey('fffbbcbeab?')

    expect(result).toEqual('Sure.')
  })

  it('talks forcefully', function () {
    const bob = new Bob()

    const result = bob.hey('Let\'s go make out behind the gym!')

    expect(result).toEqual('Whatever.')
  })

  it('uses acronyms in regular speech', function () {
    const bob = new Bob()

    const result = bob.hey('It\'s OK if you don\'t want to go to the DMV.')

    expect(result).toEqual('Whatever.')
  })

  it('asks forceful questions', function () {
    const bob = new Bob()

    const result = bob.hey('WHAT THE HELL WERE YOU THINKING?')

    expect(result).toEqual('Whoa, chill out!')
  })

  it('shouts numbers', function () {
    const bob = new Bob()

    const result = bob.hey('1, 2, 3 GO!')

    expect(result).toEqual('Whoa, chill out!')
  })

  it('states only numbers', function () {
    const bob = new Bob()

    const result = bob.hey('1, 2, 3')

    expect(result).toEqual('Whatever.')
  })

  xit('questions with only numbers', function () {
    const bob = new Bob()

    const result = bob.hey('4?')

    expect(result).toEqual('Sure.')
  })

  it('shouts with special characters', function () {
    const bob = new Bob()

    const result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')

    expect(result).toEqual('Whoa, chill out!')
  })

  it('shouts with no exclamation mark', function () {
    const bob = new Bob()

    const result = bob.hey('I HATE YOU')

    expect(result).toEqual('Whoa, chill out!')
  })

  it('makes a statement containing question mark', function () {
    const bob = new Bob()

    const result = bob.hey('Ending with a ? means a question.')

    expect(result).toEqual('Whatever.')
  })

  it('is prattling on', function () {
    const bob = new Bob()

    const result = bob.hey('Wait! Hang on.  Are you going to be OK?')

    expect(result).toEqual('Sure.')
  })

  it('is silent', function () {
    const bob = new Bob()

    const result = bob.hey('')

    expect(result).toEqual('Fine. Be that way!')
  })

  it('prolongs silence', function () {
    const bob = new Bob()

    const result = bob.hey('   ')

    expect(result).toEqual('Fine. Be that way!')
  })

  it('alternates silence', function () {
    const bob = new Bob()

    const result = bob.hey('\t\t\t\t\t\t\t\t\t\t')

    expect(result).toEqual('Fine. Be that way!')
  })

  it('asks a multiple line question', function () {
    const bob = new Bob()

    const result = bob.hey('\nDoes this cryogenic chamber make me look fat?\nno')

    expect(result).toEqual('Whatever.')
  })

  it('starts with whitespace', function () {
    const bob = new Bob()

    const result = bob.hey('         hmmmmmmm...')

    expect(result).toEqual('Whatever.')
  })

  it('asks a question ending with whitespace', function () {
    const bob = new Bob()

    const result = bob.hey('Okay if like my  spacebar  quite a bit?   ')

    expect(result).toEqual('Sure.')
  })

  it('other whitespace', function () {
    const bob = new Bob()

    const result = bob.hey('\n\r \t')

    expect(result).toEqual('Fine. Be that way!')
  })

  it('non-question ending with whitespace', function () {
    const bob = new Bob()

    const result = bob.hey('This is a statement ending with whitespace      ')

    expect(result).toEqual('Whatever.')
  })
})
