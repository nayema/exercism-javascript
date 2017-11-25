const Pangram = require('./pangram')

describe('Pangram()', function ()  {
  it('returns false when the sentence is empty', function () {
    const input = ''
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(false)
  })

  it('returns false when the sentence has only numbers', function () {
    const input = '5465465463'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(false)
  })

  it('returns true when the sentence has only lower case letters', function ()  {
    const input = 'the quick brown fox jumps over the lazy dog'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(true)
  })

  it('returns true when the sentence has only upper case letters', function ()  {
    const input = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(true)
  })

  it("returns false when the sentence is missing character 'x'", function ()  {
    const input = 'a quick movement of the enemy will jeopardize five gunboats'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(false)
  })

  it("returns false if the sentence is missing another character 'x'", function () {
    const input = 'the quick brown fish jumps over the lazy dog'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(false)
  })

  it('returns true if the sentence contains underscores', function () {
    const input = 'the_quick_brown_fox_jumps_over_the_lazy_dog'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(true)
  })

  it('returns true if the sentence contains numbers', function () {
    const input = 'the 1 quick brown fox jumps over the 2 lazy dogs'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(true)
  })

  it('returns false when missing letters are replaced by numbers', function () {
    const input = '7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(false)
  })

  it('returns true when the sentence includes mixed case and punctuation', function ()  {
    const input = '"Five quacking Zephyrs jolt my wax bed."'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(true)
  })

  it('returns true if the sentence includes non-ascii characters', function ()  {
    const input = 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.'
    const pangram = new Pangram(input)

    const result = pangram.isPangram()

    expect(result).toEqual(true)
  })
})
