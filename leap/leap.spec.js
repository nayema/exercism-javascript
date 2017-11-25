const Year = require('./leap')

describe('Leap year', function () {
  it('returns false if it is not very common', function () {
    const input = 2015
    const year = new Year(input)

    const result = year.isLeap()

    expect(result).toEqual(false)
  })

  it('returns true if it is introduced every 4 years to adjust about a day',
    function () {
      const input = 2016
      const year = new Year(input)

      const result = year.isLeap()

      expect(result).toEqual(true)
    })

  it('returns false if it is skipped every 100 years to remove an extra day',
    function () {
      const input = 1900
      const year = new Year(input)

      const result = year.isLeap()

      expect(result).toEqual(false)
    })

  it('returns true if it is reintroduced every 400 years to adjust another day',
    function () {
      const input = 2000
      const year = new Year(input)

      const result = year.isLeap()

      expect(result).toEqual(true)
    })

  describe('Additional example of a leap year that', function () {
    it('returns false is it is not a leap year', function () {
      const input = 1978
      const year = new Year(input)

      const result = year.isLeap()

      expect(result).toEqual(false)
    })

    it('returns true if it is a common leap year', function () {
      const input = 1992
      const year = new Year(input)

      const result = year.isLeap()

      expect(result).toEqual(true)
    })

    it('returns false if it is skipped every 100 years', function () {
      const input = 2100
      const year = new Year(input)

      const result = year.isLeap()

      expect(result).toEqual(false)
    })

    it('returns true if it is reintroduced every 400 years', function () {
      const input = 2400
      const year = new Year(input)

      const result = year.isLeap()

      expect(result).toEqual(true)
    })
  })
})
